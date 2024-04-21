import { Component, effect, inject, input } from '@angular/core';
import { outputFromObservable } from '@angular/core/rxjs-interop';
import { FormGroup, ReactiveFormsModule, UntypedFormBuilder } from '@angular/forms';
import { ProductsQueryParams } from '../../interfaces/products-query-params.interface';
import { map } from 'rxjs';

@Component({
  selector: 'mk-products-filter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './products-filter.component.html',
  styleUrl: './products-filter.component.scss'
})
export class ProductsFilterComponent {
  private readonly formBuilder: UntypedFormBuilder = inject(UntypedFormBuilder);
  readonly form: FormGroup = this.formBuilder.group({
    limit: [],
    skip: []
  });

  readonly valueChanges$ = this.form.valueChanges;
  readonly value = input<Partial<ProductsQueryParams>>();
  readonly valueChange = outputFromObservable<Partial<ProductsQueryParams>>(this.valueChanges$);

  constructor() {
    this.setValueEffect();
  }

  private setValueEffect(): void {
    effect(() => {
      const value = this.value();
      if (value) {
        this.form.patchValue(value, {onlySelf: true, emitEvent: false});
      }
    });
  }
}
