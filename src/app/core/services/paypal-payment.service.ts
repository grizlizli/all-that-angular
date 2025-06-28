import { Injectable } from '@angular/core';
import { PaymentService } from './payment.service';



@Injectable({
  providedIn: 'root'
})
export class PaypalPaymentService extends PaymentService {

  constructor() {
    super();
  }

  override pay = (amount: number)  => amount + 2;
}
