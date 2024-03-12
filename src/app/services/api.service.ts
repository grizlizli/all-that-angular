import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { ApiEndpointConfig } from '../interfaces/api-endpoint-config.interface';

export const DEFAULT_API_ENDPOINT: ApiEndpointConfig = {
  endpoint: 'http://localhost:8000',
  version: '1',
  prefix: 'api'
};

export const API_ENDPOINT_CONFIG = new InjectionToken<ApiEndpointConfig>('API_ENDPOINT_CONFIG');

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly ENDPOINT: string;

  constructor(@Inject(API_ENDPOINT_CONFIG) private readonly apiEndpointConfig: ApiEndpointConfig, private readonly http: HttpClient) {
    this.ENDPOINT = `${this.apiEndpointConfig.endpoint}/${this.apiEndpointConfig.prefix}/v${this.apiEndpointConfig.version}`;
  }

  get<T = unknown>(route: string, params: any = {}): Observable<T> {
    return this.http.get<T>(`${this.ENDPOINT}/${route}`, { params }).pipe(retry(3));
  }
  
  post<T = unknown>(route: string, body: unknown): Observable<T> {
    return this.http.post<T>(`${this.ENDPOINT}/${route}`, body).pipe(retry(3));
  }

  put<T = unknown>(route: string, body: unknown) {
    return this.http.put<T>(`${this.ENDPOINT}/${route}`, body);
  }

  patch<T = unknown>(route: string, body: any = {}) {
    return this.http.patch(`${this.ENDPOINT}/${route}`, body);
  }

  delete<T = unknown>(route: string, body: any = {}) {
    return this.http.delete<T>(`${this.ENDPOINT}/${route}`, body);
  }
}
