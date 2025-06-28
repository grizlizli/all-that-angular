import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[mkTest]'
})
export class TestDirective {
  readonly elementRef = inject(ElementRef);

  constructor() {
    this.elementRef.nativeElement.style.color = 'red';
  }
}
