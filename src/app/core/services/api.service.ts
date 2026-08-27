// src/app/core/services/api.service.ts
import { HttpClient, HttpParams, HttpContext } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse } from '../../models/api-response.model';

@Injectable({ providedIn: 'root' })
export abstract class ApiService {
  protected http = inject(HttpClient);
  protected baseUrl = environment.apiUrl;

  protected abstract prefix: string;

  private buildUrl(path: string): string {
    const cleanPath = path.replace(/^\/+/, '');
    return `${this.baseUrl}/${this.prefix}/${cleanPath}`.replace(/([^:]\/)\/+/g, '$1');
  }

  private toHttpParams(params?: Record<string, any>): HttpParams {
    let httpParams = new HttpParams();
    if (!params) return httpParams;
    Object.keys(params).forEach((key) => {
      const value = params[key];
      if (value !== undefined && value !== null && value !== '') {
        httpParams = httpParams.set(key, value);
      }
    });
    return httpParams;
  }

  // Không còn map((res) => res.data) nữa — trả nguyên envelope luôn
  protected get<T>(
    path: string,
    params?: Record<string, any>,
    context?: HttpContext,
  ): Observable<ApiResponse<T>> {
    return this.http.get<ApiResponse<T>>(this.buildUrl(path), {
      params: this.toHttpParams(params),
      context,
    });
  }

  protected post<T>(path: string, body: any, context?: HttpContext): Observable<ApiResponse<T>> {
    return this.http.post<ApiResponse<T>>(this.buildUrl(path), body, { context });
  }

  protected put<T>(path: string, body: any, context?: HttpContext): Observable<ApiResponse<T>> {
    return this.http.put<ApiResponse<T>>(this.buildUrl(path), body, { context });
  }

  protected patch<T>(path: string, body: any, context?: HttpContext): Observable<ApiResponse<T>> {
    return this.http.patch<ApiResponse<T>>(this.buildUrl(path), body, { context });
  }

  protected delete<T>(path: string, params?: Record<string, any>): Observable<ApiResponse<T>> {
    return this.http.delete<ApiResponse<T>>(this.buildUrl(path), {
      params: this.toHttpParams(params),
    });
  }
}
