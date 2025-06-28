import { TestBed } from '@angular/core/testing';

import { Api2Service } from './api-2.service';

describe('Api2Service', () => {
  let service: Api2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Api2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
