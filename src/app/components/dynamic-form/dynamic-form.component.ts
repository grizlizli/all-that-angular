import { Component, computed, input } from '@angular/core';
import { ReactiveFormsModule, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { DynamicFormFieldComponent } from '../dynamic-form-field/dynamic-form-field.component';
import { outputFromObservable } from '@angular/core/rxjs-interop';
import { DynamicReactiveFormField } from '../../interfaces/dynamic-reactive-form-field.interface';

@Component({
  selector: 'mk-dynamic-form',
  imports: [ReactiveFormsModule, DynamicFormFieldComponent],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent {
  private readonly form = new UntypedFormGroup({});

  readonly fieldset = input.required<DynamicReactiveFormField[]>();
  readonly readonly = input<boolean>(false);

  readonly formFieldset = computed(() => {
    this.form.reset({}, {emitEvent: false});

    const fieldset = this.fieldset();
    fieldset.forEach((field) => {
      this.form.addControl(field.name, this.initializeFormControl(field), { emitEvent: false})
    });

    return this.form;
  });

  readonly valueChange = outputFromObservable(this.form.valueChanges);

  private initializeFormControl(field: DynamicReactiveFormField): UntypedFormControl {
    const validators = field.validators ? field.validators : [];
    const disabled = field.disabled || this.readonly();
    const control = new UntypedFormControl({ value: field.value, disabled }, validators);

    return control;
  }
}
