// src/app/core/services/auth.service.ts
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable, tap } from 'rxjs';
import { ApiService } from './api.service';
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from '../../models/auth.model';
import { ApiResponse } from '../../models/api-response.model';

@Injectable({ providedIn: 'root' })
export class AuthService extends ApiService {
  protected override prefix = 'auth';
  private platformId = inject(PLATFORM_ID);

  login(payload: LoginRequest): Observable<ApiResponse<LoginResponse>> {
    return this.post<LoginResponse>('login', payload).pipe(
      tap((res) => this.setTokens(res.data.accessToken, res.data.refreshToken)),
    );
  }

  register(payload: RegisterRequest): Observable<ApiResponse<RegisterResponse>> {
    return this.post<RegisterResponse>('register', payload);
  }

  refreshToken(
    refreshToken: string,
  ): Observable<ApiResponse<{ accessToken: string; refreshToken: string }>> {
    return this.post('refresh', { refreshToken });
  }

  logout(): Observable<ApiResponse<void>> {
    const refreshToken = this.getRefreshToken();
    return this.post<void>('logout', refreshToken ? { refreshToken } : {}).pipe(
      tap(() => this.clearTokens()),
    );
  }

  setTokens(accessToken: string, refreshToken: string): void {
    if (!isPlatformBrowser(this.platformId)) return;
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  }

  getToken(): string | null {
    return isPlatformBrowser(this.platformId) ? localStorage.getItem('accessToken') : null;
  }

  getRefreshToken(): string | null {
    return isPlatformBrowser(this.platformId) ? localStorage.getItem('refreshToken') : null;
  }

  clearTokens(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
