import { HttpErrorResponse, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, filter, switchMap, take, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

let isRefreshing = false;
const refreshTokenSubject = new BehaviorSubject<string | null>(null);

const AUTH_EXCLUDE_PATHS = ['/auth/login', '/auth/register', '/auth/refresh'];

function isExcluded(url: string): boolean {
  return AUTH_EXCLUDE_PATHS.some((path) => url.includes(path));
}

function addToken(req: HttpRequest<unknown>, token: string): HttpRequest<unknown> {
  return req.clone({
    setHeaders: { Authorization: `Bearer ${token}` },
  });
}

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const token = authService.getToken();
  const authReq = token && !isExcluded(req.url) ? addToken(req, token) : req;

  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status !== 401 || isExcluded(req.url)) {
        return throwError(() => error);
      }

      const refreshToken = authService.getRefreshToken();
      if (!refreshToken) {
        authService.clearTokens();
        router.navigate(['/login']);
        return throwError(() => error);
      }

      if (!isRefreshing) {
        isRefreshing = true;
        refreshTokenSubject.next(null);

        return authService.refreshToken(refreshToken).pipe(
          switchMap((res) => {
            isRefreshing = false;
            authService.setTokens(res.data.accessToken, res.data.refreshToken);
            refreshTokenSubject.next(res.data.accessToken);
            return next(addToken(req, res.data.accessToken));
          }),
          catchError((refreshError) => {
            isRefreshing = false;
            authService.clearTokens();
            router.navigate(['/login']);
            return throwError(() => refreshError);
          }),
        );
      }

      return refreshTokenSubject.pipe(
        filter((newToken) => newToken !== null),
        take(1),
        switchMap((newToken) => next(addToken(req, newToken as string))),
      );
    }),
  );
};
