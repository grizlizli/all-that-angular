import { Component } from '@angular/core';
import { Widget } from '../../../core/interfaces/widget.interface';
import { WIDGET } from '../../../core/providers/widget.provider';

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
  displayMore() {
    alert('hello from widget B')
  }
}
