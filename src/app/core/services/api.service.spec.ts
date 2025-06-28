import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { API_ENDPOINT_CONFIG, DEFAULT_API_ENDPOINT_CONFIG } from '../core/providers/api-endpoint-config.provider';
import { API_ENDPOINT_URL, DEFAULT_API_ENDPOINT_URL } from '../core/providers/api-endpoint-url.provider';

describe('ApiService', () => {
  let service: ApiService;
  const httpClient: jasmine.SpyObj<HttpClient> = jasmine.createSpyObj('HttpClient', ['get']);
  const testData = { title: 'Test' };
  const testError = new Error('test');

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [{
        provide: API_ENDPOINT_CONFIG,
        useValue: DEFAULT_API_ENDPOINT_CONFIG
      }, {
        provide: API_ENDPOINT_URL,
        useValue: DEFAULT_API_ENDPOINT_URL
      }, {
        provide: HttpClient,
        useValue: httpClient
      }]
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it(`should set 'http://localhost:8000/api/v1' to the private ENDPOINT variable by providing DEFAULT_API_ENDPOINT_CONFIG`, () => {
  //   expect(service['ENDPOINT']).toBe('http://localhost:8000/api/v1');
  // });

  it('should return response when calling get method and return test data', () => {
    httpClient.get.and.returnValue(of(testData));
    service.get('test').subscribe(response => expect(response).toEqual(testData));
  });

  it('should catch error when calling get method', () => {
    httpClient.get.and.returnValue(throwError(() => testError));
    service.get('test').subscribe({ error: error => expect(error).toEqual(testError) });
  });
});
