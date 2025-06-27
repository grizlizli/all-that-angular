import { Component, inject, input } from '@angular/core';
import { Widget } from '../../../core/interfaces/widget.interface';
import { WIDGET } from '../../../core/providers/widget.provider';
import { WidgetContainerComponent } from '../widget-container/widget-container.component';

@Component({
  selector: 'mk-widget-b',
  imports: [],
  providers: [{
      provide: WIDGET,
      useExisting: WidgetBComponent
    }],
  templateUrl: './widget-b.component.html',
  styleUrl: './widget-b.component.scss'
})
export class WidgetBComponent implements Widget {
  readonly name = input('PayPal');
  protected readonly container = inject(WidgetContainerComponent, { optional: true });

  pay() {
    this.container?.hello();
    alert('payment from widget B')
  }
}
