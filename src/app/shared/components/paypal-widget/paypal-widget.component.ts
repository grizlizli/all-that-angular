import { Component, inject, input } from '@angular/core';
import { WIDGET } from '../../../core/providers/widget.provider';
import { Widget } from '../../../core/interfaces/widget.interface';
import { PaypalPaymentService } from '../../../core/services/paypal-payment.service';
import { PaymentService } from '../../../core/services/payment.service';

@Component({
  selector: 'mk-paypal-widget',
  imports: [],
  providers: [{
      provide: WIDGET,
      useExisting: PaypalWidgetComponent
    }, {
      provide: PaymentService,
      useClass: PaypalPaymentService
    }],
  templateUrl: './paypal-widget.component.html',
  styleUrl: './paypal-widget.component.scss'
})
export class PaypalWidgetComponent implements Widget {
  private readonly paypalPayment = inject(PaymentService);
  readonly name = input('PayPal');

  constructor() {
    console.log('paypal widget', this.paypalPayment.endpointUrl());
  }

  pay() {
    console.log('Payment from PayPal Widget ', this.paypalPayment.pay(200));
  }

}
