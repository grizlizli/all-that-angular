import { TestBed } from '@angular/core/testing';

import { PaypalPaymentService } from './paypal-payment.service';

describe('PaypalPaymentService', () => {
  let service: PaypalPaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaypalPaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
