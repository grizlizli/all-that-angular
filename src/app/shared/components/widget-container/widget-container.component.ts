import { WIDGET } from '../../../core/providers/widget.provider';
import { Component, contentChild, inject, ViewContainerRef } from '@angular/core';
import { TestDirective } from '../../directives/test.directive';

@Component({
  selector: 'mk-widget-container',
  templateUrl: './widget-container.component.html',
  styleUrl: './widget-container.component.scss',
  hostDirectives: [
    TestDirective
  ]
})
export class WidgetContainerComponent {
  protected readonly widget = contentChild(WIDGET);
  private readonly viewContainerRef = inject(ViewContainerRef);

  readonly name = 'Widget payment';

  constructor() {
    console.log(this.name, this.viewContainerRef);
  }

  hello() {
    alert('hello from widget container!');
  }
}
