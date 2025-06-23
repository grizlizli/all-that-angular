import { Component } from '@angular/core';
import { WIDGET } from '../../../core/providers/widget.provider';
import { Widget } from '../../../core/interfaces/widget.interface';

@Component({
  selector: 'mk-apple-pay-widget',
  imports: [],
  providers: [{
    provide: WIDGET,
    useExisting: ApplePayWidgetComponent
  }],
  templateUrl: './apple-pay-widget.component.html',
  styleUrl: './apple-pay-widget.component.scss'
})
export class ApplePayWidgetComponent implements Widget {
  pay() {
    alert('Payment from Apple Pay')
  }
}
