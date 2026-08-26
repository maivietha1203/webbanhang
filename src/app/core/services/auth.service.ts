import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable, tap, catchError, of, map } from 'rxjs';
import { ApiService } from './api.service';

export interface ApiResponse<T> {
  timestamp: string;
  success: boolean;
  message: string;
  data: T;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  tokenType?: string;
  expiresIn?: number;
  user?: {
    id: string;
    username: string;
    email: string;
    role: string;
    status: string;
    emailVerified: boolean;
  };
}

export interface RefreshResponse {
  accessToken: string;
  refreshToken?: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  role?: number; // 0 = admin, 1 = customer, 2 = staff
}

export interface LoginRequest {
  usernameOrEmail: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService extends ApiService {
  private platformId = inject(PLATFORM_ID);

  private readonly authPrefix = 'auth';

  login(payload: LoginRequest): Observable<AuthResponse> {
    return this.post<ApiResponse<AuthResponse>>(`${this.authPrefix}/login`, payload).pipe(
      map((res) => res.data),
      tap((data) => this.setTokens(data.accessToken, data.refreshToken)),
    );
  }

  register(payload: RegisterRequest): Observable<AuthResponse> {
    return this.post<ApiResponse<AuthResponse>>(`${this.authPrefix}/register`, payload).pipe(
      map((res) => res.data),
      tap((data) => this.setTokens(data.accessToken, data.refreshToken)),
    );
  }

  refreshToken(): Observable<RefreshResponse> {
    const refreshToken = this.getRefreshToken();

    return this.post<ApiResponse<RefreshResponse>>(`${this.authPrefix}/refresh`, {
      refreshToken,
    }).pipe(
      map((res) => res.data),
      tap((data) => this.setTokens(data.accessToken, data.refreshToken ?? refreshToken!)),
    );
  }

  logout(): Observable<void> {
    const refreshToken = this.getRefreshToken();

    return this.post<ApiResponse<void>>(`${this.authPrefix}/logout`, { refreshToken }).pipe(
      map(() => void 0),
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
