import { WIDGET } from '../../../core/providers/widget.provider';
import { afterNextRender, Component, contentChild, viewChild } from '@angular/core';

@Component({
  selector: 'mk-widget-container',
  imports: [],
  templateUrl: './widget-container.component.html',
  styleUrl: './widget-container.component.scss'
})
export class WidgetContainerComponent {
  readonly widget = contentChild(WIDGET);

  constructor() {
    afterNextRender(() => {
      console.log('widget', this.widget());
    })
  }
}
