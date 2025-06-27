import { Component, inject, input } from '@angular/core';
import { WIDGET } from '../../../core/providers/widget.provider';
import { Widget } from '../../../core/interfaces/widget.interface';
import { WidgetContainerComponent } from '../widget-container/widget-container.component';
import { PaymentService } from '../../../core/services/payment.service';
import { API_ENDPOINT_URL } from '../../../core/providers/api-endpoint-url.provider';
import { ApplePayPaymentService } from '../../../core/services/apple-pay-payment.service';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'mk-apple-pay-widget',
  imports: [],
  providers: [
    {
      provide: WIDGET,
      useExisting: ApplePayWidgetComponent
    },
    {
      provide: PaymentService,
      useClass: ApplePayPaymentService
    },
    {
      provide: API_ENDPOINT_URL,
      useFactory: () => 'https://apple-pay-1234.com'
    },
    ApiService
  ],
  templateUrl: './apple-pay-widget.component.html',
  styleUrl: './apple-pay-widget.component.scss'
})
export class ApplePayWidgetComponent implements Widget {
  private readonly applePayPayment = inject(PaymentService);
  private readonly widgetContainer = inject(WidgetContainerComponent, { optional: true });
  readonly name = input<string>(this.widgetContainer?.name || '');

  ngOnInit(): void {
    console.log('ApplePay container', this.widgetContainer);
    console.log('ApplePay on init', this.applePayPayment.endpointUrl())
  }

  pay() {
    console.log('Payment from ApplePay Widget ', this.applePayPayment.pay(200));
  }
}
