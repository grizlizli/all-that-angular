import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { API_ENDPOINT_URL } from '../providers/api-endpoint-url.provider';
import { API_ENDPOINT_CONFIG, ApiEndpointConfig } from '../providers/api-endpoint-config.provider';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly apiEndpointConfig: ApiEndpointConfig = inject(API_ENDPOINT_CONFIG);
  private readonly ENDPOINT_URL: string = inject(API_ENDPOINT_URL);
  private readonly ENDPOINT: string = `${this.apiEndpointConfig.endpoint}/${this.apiEndpointConfig.prefix}/v${this.apiEndpointConfig.version}`;

  get<T = unknown>(route: string, params: any = {}): Observable<T> {
    return this.http.get<T>(`${this.ENDPOINT_URL}/${route}`, { params }).pipe(retry(3));
  }
  
  post<T = unknown>(route: string, body: unknown): Observable<T> {
    return this.http.post<T>(`${this.ENDPOINT_URL}/${route}`, body).pipe(retry(3));
  }

  put<T = unknown>(route: string, body: unknown) {
    return this.http.put<T>(`${this.ENDPOINT_URL}/${route}`, body);
  }

  patch<T = unknown>(route: string, body: any = {}) {
    return this.http.patch<T>(`${this.ENDPOINT_URL}/${route}`, body);
  }

  delete<T = unknown>(route: string, body: any = {}) {
    return this.http.delete<T>(`${this.ENDPOINT_URL}/${route}`, body);
  }
}
