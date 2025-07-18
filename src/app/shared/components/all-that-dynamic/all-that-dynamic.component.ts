import { afterRenderEffect, Binding, Component, createComponent, Directive, EnvironmentInjector, inject, input, inputBinding, model, Type, viewChild, ViewContainerRef } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { FormsModule } from '@angular/forms';

interface DirectiveWithBindings<T> {
    /** Directive type that should be created. */
    type: Type<T>;
    /** Bindings that should be applied to the specific directive. */
    bindings: Binding[];
}

export interface DynamicElement {
  type: Type<unknown>,
  bindings: Binding[],
  directives?: (Type<unknown> | DirectiveWithBindings<unknown>)[];
}

@Component({
  selector: 'mk-all-that-dynamic',
  imports: [FormsModule],
  templateUrl: './all-that-dynamic.component.html',
  styleUrl: './all-that-dynamic.component.scss',
  host: {ngSkipHydration: 'true'},
})
export class AllThatDynamicComponent {
  protected readonly container = viewChild.required('container', { read: ViewContainerRef });
  readonly #environmentInjector = inject(EnvironmentInjector);

  readonly value = model.required();

  readonly dynamicElement = input.required<DynamicElement>();

  constructor() {
    afterRenderEffect(() => {
      const container = this.container();

      const componentRef = createComponent(this.dynamicElement().type, {
        environmentInjector: this.#environmentInjector,
        bindings: this.dynamicElement()?.bindings || [],
        directives: this.dynamicElement()?.directives || []
      });

      container.insert(componentRef.hostView);
    });


  }
}
