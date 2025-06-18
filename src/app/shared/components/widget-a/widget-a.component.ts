import { Component } from '@angular/core';
import { Widget } from '../../../core/interfaces/widget.interface';
import { WIDGET } from '../../../core/providers/widget.provider';

@Component({
  selector: 'mk-widget-a',
  imports: [],
  providers: [{
    provide: WIDGET,
    useExisting: WidgetAComponent
  }],
  templateUrl: './widget-a.component.html',
  styleUrl: './widget-a.component.scss'
})
export class WidgetAComponent implements Widget {
  displayMore() {
    alert('hello from widget A')
  }
}
