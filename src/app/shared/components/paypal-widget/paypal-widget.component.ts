import { Component } from '@angular/core';
import { WIDGET } from '../../../core/providers/widget.provider';
import { Widget } from '../../../core/interfaces/widget.interface';

@Component({
  selector: 'mk-paypal-widget',
  imports: [],
  providers: [{
      provide: WIDGET,
      useExisting: PaypalWidgetComponent
    }],
  templateUrl: './paypal-widget.component.html',
  styleUrl: './paypal-widget.component.scss'
})
export class PaypalWidgetComponent implements Widget {
  pay() {
    alert('Payment from PayPal');
  }

}
