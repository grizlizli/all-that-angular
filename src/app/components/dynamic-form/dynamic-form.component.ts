import { Component, computed, inject, input, output } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { DynamicFormFieldComponent } from '../dynamic-form-field/dynamic-form-field.component';
import { Field } from '../../models/dynamic-reactive-form.model';
import { outputFromObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'mk-dynamic-form',
  imports: [ReactiveFormsModule, DynamicFormFieldComponent],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent {
  private readonly formBuilder = inject(UntypedFormBuilder);

  readonly fieldset = input.required<Field[]>();
  readonly readonly = input<boolean>(false);

  readonly form = computed(() => {
    const form = this.formBuilder.group({});
    const fieldset = this.fieldset();
    fieldset.forEach((field) => {
      form.addControl(field.name, this.initializeFormControl(field))
    });

    return form;
  });

  private initializeFormControl(field: Field): UntypedFormControl {
    let value;

    if (typeof field.value !== 'undefined') {
      value = field.value;
    }

    const validators = field.validators ? field.validators : [];
    const disabled = field.disabled || this.readonly();
    const control = this.formBuilder.control({ value, disabled }, validators);

    return control;
  }
}
