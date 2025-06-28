import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { API_ENDPOINT_URL } from '../providers/api-endpoint-url.provider';

@Injectable({
  providedIn: 'root'
})
export class Api2Service extends HttpClient {
  private readonly endpointUrl = inject(API_ENDPOINT_URL);

  override get<T = unknown>(path: string, options?: {
    headers?: HttpHeaders | Record<string, string | string[]>;
    context?: HttpContext;
    params?: HttpParams | Record<string, string | number | boolean | ReadonlyArray<string | number | boolean>>;
  }) {
    return super.get<T>(`${this.endpointUrl}/${path}}`, options).pipe(retry({
      count: 3,
      delay: 1000
    }));
  }
}
