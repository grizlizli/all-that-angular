import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, retry, RetryConfig } from 'rxjs';
import { API_ENDPOINT_URL } from '../providers/api-endpoint-url.provider';
import { API_ENDPOINT_CONFIG, ApiEndpointConfig } from '../providers/api-endpoint-config.provider';

const retryConfig: RetryConfig = {
  count: 3,
  delay: 3000
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly apiEndpointConfig: ApiEndpointConfig = inject(API_ENDPOINT_CONFIG);
  private readonly endpointUrl: string = inject(API_ENDPOINT_URL);
  // deprecated
  private readonly endpoint: string = `${this.apiEndpointConfig.endpoint}/${this.apiEndpointConfig.prefix}/v${this.apiEndpointConfig.version}`;

  get<T = unknown>(route: string, params: any = {}): Observable<T> {
    return this.http.get<T>(`${this.endpointUrl}/${route}`, { params }).pipe(retry(retryConfig));
  }
  
  post<T = unknown>(route: string, body: unknown): Observable<T> {
    return this.http.post<T>(`${this.endpointUrl}/${route}`, body).pipe(retry(retryConfig));
  }

  put<T = unknown>(route: string, body: unknown) {
    return this.http.put<T>(`${this.endpointUrl}/${route}`, body);
  }

  patch<T = unknown>(route: string, body: any = {}) {
    return this.http.patch<T>(`${this.endpointUrl}/${route}`, body);
  }

  delete<T = unknown>(route: string, body: any = {}) {
    return this.http.delete<T>(`${this.endpointUrl}/${route}`, body);
  }
}
