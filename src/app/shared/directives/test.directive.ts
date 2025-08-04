import { Directive, ElementRef, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[mkTest]'
})
export class TestDirective {
  readonly elementRef = inject(ElementRef);
  readonly renderer = inject(Renderer2);

  constructor() {
    this.renderer.setStyle(this.elementRef, 'style', 'red')
  }


}
