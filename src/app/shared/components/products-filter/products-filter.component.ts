import { ChangeDetectionStrategy, Component, computed, effect, inject, input } from '@angular/core';
import { outputFromObservable } from '@angular/core/rxjs-interop';
import { FormGroup, ReactiveFormsModule, UntypedFormBuilder } from '@angular/forms';
import { ProductsQueryParams } from '../../../core/interfaces/products-query-params.interface';
import {MatInputModule} from '@angular/material/input';

@Component({
    selector: 'mk-products-filter',
    imports: [ReactiveFormsModule, MatInputModule],
    templateUrl: './products-filter.component.html',
    styleUrl: './products-filter.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsFilterComponent {
  private readonly formBuilder: UntypedFormBuilder = inject(UntypedFormBuilder);
  readonly form: FormGroup = this.formBuilder.group({
    limit: [],
    skip: []
  });

  readonly value = input.required<Partial<ProductsQueryParams>>();
  readonly valueChange = outputFromObservable<Partial<ProductsQueryParams>>(this.form.valueChanges);


  readonly formSignal = computed(() => {
    const value = this.value();
    if (value) {
      const formValue = this.form.getRawValue();
      const emitEvent = JSON.stringify(formValue) !== JSON.stringify(value);
      this.form.patchValue(value, { onlySelf: true, emitEvent });
    }

    return this.form;
  });


  // constructor() {
  //   this.setValueInputEffect();
  // }

  private setValueInputEffect(): void {
    effect(() => {
      const value = this.value();
      if (value) {
        const formValue = this.form.getRawValue();
        const emitEvent = JSON.stringify(formValue) !== JSON.stringify(value);
        this.form.patchValue(value, { onlySelf: true, emitEvent });
      }
    });
  }
}
