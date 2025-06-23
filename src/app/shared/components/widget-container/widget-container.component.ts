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
  private readonly testDirective = inject(TestDirective);
  private readonly viewContainerRef = inject(ViewContainerRef);

  ngOnInit() {
    console.log(this.viewContainerRef);
    setTimeout(() => {
      this.testDirective.elementRef.nativeElement.style.color = 'green';
    }, 3000);
  }

  hello() {
    alert('hello from widget container!');
  }
}
