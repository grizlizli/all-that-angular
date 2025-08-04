import { afterEveryRender, afterNextRender, Directive, ElementRef, inject, input, Renderer2, TemplateRef, untracked, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[mkTest]'
})
export class TestDirective {
  readonly elementRef = inject(ElementRef);
  readonly vcr = inject(ViewContainerRef);
  readonly renderer = inject(Renderer2);

  readonly templateRef = input<TemplateRef<any>>();

  constructor() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background', 'red');

    afterNextRender(() => {
      const templateRef = this.templateRef();

      if (templateRef) {
        const view = templateRef.createEmbeddedView(null);
        this.vcr.insert(view);
        this.renderer.appendChild(this.elementRef.nativeElement, view.rootNodes);
      }
    });
  }


}
