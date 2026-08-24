import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable, tap, catchError, of } from 'rxjs';
import { ApiService } from './api.service';

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
}

export interface RefreshResponse {
  accessToken: string;
  refreshToken?: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  role?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
//kế thừa api sevit
export class AuthService extends ApiService {
  private platformId = inject(PLATFORM_ID);

  private readonly authPrefix = 'auth';

  login(payload: LoginRequest): Observable<AuthResponse> {
    return this.post<AuthResponse>(`${this.authPrefix}/login`, payload).pipe(
      tap((res) => this.setTokens(res.accessToken, res.refreshToken)),
    );
  }

  register(payload: RegisterRequest): Observable<AuthResponse> {
    return this.post<AuthResponse>(`${this.authPrefix}/register`, payload).pipe(
      tap((res) => this.setTokens(res.accessToken, res.refreshToken)),
    );
  }

  refreshToken(): Observable<RefreshResponse> {
    const refreshToken = this.getRefreshToken();

    return this.post<RefreshResponse>(`${this.authPrefix}/refresh`, { refreshToken }).pipe(
      tap((res) => this.setTokens(res.accessToken, res.refreshToken ?? refreshToken!)),
    );
  }

  logout(): Observable<void> {
    const refreshToken = this.getRefreshToken();

    return this.post<void>(`${this.authPrefix}/logout`, { refreshToken }).pipe(
      tap(() => this.clearTokens()),
      catchError(() => {
        this.clearTokens();
        return of(void 0);
      }),
    );
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getToken(): string | null {
    if (!isPlatformBrowser(this.platformId)) return null;
    return localStorage.getItem('token');
  }

  getRefreshToken(): string | null {
    if (!isPlatformBrowser(this.platformId)) return null;
    return localStorage.getItem('refreshToken');
  }

  setTokens(accessToken: string, refreshToken: string): void {
    if (!isPlatformBrowser(this.platformId)) return;
    localStorage.setItem('token', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  }

  clearTokens(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
  }
}
