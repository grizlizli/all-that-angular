import { TestBed } from '@angular/core/testing';

import { API_ENDPOINT_CONFIG, ApiService, DEFAULT_API_ENDPOINT_CONFIG } from './api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';

describe('ApiService', () => {
  let service: ApiService;
  let httpClient: HttpClient;
  const testData = { title: 'Test' };
  const testError = new Error('test');

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{
        provide: API_ENDPOINT_CONFIG,
        useValue: DEFAULT_API_ENDPOINT_CONFIG
      }]
    });
    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should set 'http://localhost:8000/api/v1' to the private ENDPOINT variable by providing DEFAULT_API_ENDPOINT_CONFIG`, () => {
    expect(service['ENDPOINT']).toBe('http://localhost:8000/api/v1');
  });

  it('should return response when calling get method and return test data', () => {
    const httpGetSpy = spyOn(httpClient, 'get').and.returnValue(of(testData)); 
    service.get('test');
    expect(httpGetSpy).toHaveBeenCalled();
    service.get('test').subscribe(response => expect(response).toEqual(testData));
  });

  it('should catch error when calling get method', () => {
    const httpGetSpy = spyOn(httpClient, 'get').and.returnValue(throwError(() => testError)); 
    service.get('test');
    expect(httpGetSpy).toHaveBeenCalled();
    service.get('test').subscribe({error: error => expect(error).toEqual(testError)});
  });
});
