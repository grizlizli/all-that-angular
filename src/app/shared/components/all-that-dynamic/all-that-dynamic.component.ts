import { afterNextRender, afterRenderEffect, ApplicationRef, Component, createComponent, effect, ElementRef, EnvironmentInjector, inject, Injector, input, viewChild, ViewContainerRef } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'mk-all-that-dynamic',
  imports: [],
  templateUrl: './all-that-dynamic.component.html',
  styleUrl: './all-that-dynamic.component.scss'
})
export class AllThatDynamicComponent {
  protected readonly container = viewChild.required('container', { read: ViewContainerRef });
  private readonly appRef = inject(ApplicationRef);
  readonly #injector = inject(EnvironmentInjector);

  readonly dynamicElement = input<any>();

  constructor() {
    afterRenderEffect(() => {
      const container = this.container();

      const componentRef = createComponent(ProductCardComponent, {
        environmentInjector: this.#injector,
        projectableNodes: container.element.nativeElement,
        bindings
      });



      componentRef.setInput('id', 123);
      componentRef.setInput('title', '123');
      componentRef.setInput('category', 'category');
      componentRef.setInput('thumbnail', '12thumbnail3');
      componentRef.setInput('description', 'description');

      this.appRef.attachView(componentRef.hostView);
    });
  }
}
