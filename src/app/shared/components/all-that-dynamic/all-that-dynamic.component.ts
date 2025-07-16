import { afterRenderEffect, Binding, Component, createComponent, Directive, EnvironmentInjector, inject, input, inputBinding, model, Type, viewChild, ViewContainerRef } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { FormsModule } from '@angular/forms';

export interface DynamicElement {
  type: Type<unknown>,
  bindings: Binding[],
  directives?: Type<unknown>[]
}

@Component({
  selector: 'mk-all-that-dynamic',
  imports: [FormsModule],
  templateUrl: './all-that-dynamic.component.html',
  styleUrl: './all-that-dynamic.component.scss'
})
export class AllThatDynamicComponent {
  protected readonly container = viewChild.required('container', { read: ViewContainerRef });
  readonly #injector = inject(EnvironmentInjector);

  readonly value = model.required();

  readonly dynamicElement = input.required<DynamicElement>();

  constructor() {
    afterRenderEffect(() => {
      const container = this.container();

      const componentRef = createComponent(this.dynamicElement().type, {
        environmentInjector: this.#injector,
        bindings: this.dynamicElement()?.bindings || [],
        directives: this.dynamicElement()?.directives || [],

      });

      container.insert(componentRef.hostView);
    });


  }
}
