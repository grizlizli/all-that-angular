import { TestBed } from '@angular/core/testing';

import { ApplePayPaymentService } from './apple-pay-payment.service';

describe('ApplePayPaymentService', () => {
  let service: ApplePayPaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplePayPaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
