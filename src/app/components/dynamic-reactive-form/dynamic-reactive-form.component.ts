import { Component, computed, input } from '@angular/core';
import { outputFromObservable } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { DynamicReactiveFormField } from '../../interfaces/dynamic-reactive-form-field.interface';
import { DynamicReactiveFormFieldComponent } from '../dynamic-reactive-form-field/dynamic-reactive-form-field.component';


@Component({
  selector: 'mk-dynamic-reactive-form',
  imports: [ReactiveFormsModule, DynamicReactiveFormFieldComponent],
  templateUrl: './dynamic-reactive-form.component.html',
  styleUrl: './dynamic-reactive-form.component.scss'
})
export class DynamicReactiveFormComponent {
  private readonly form = new UntypedFormGroup({});

  readonly fields = input.required<DynamicReactiveFormField[]>();
  readonly readonly = input<boolean>(false);

  readonly formFieldset = computed(() => {
    this.form.reset({}, {emitEvent: false});

    const fieldset = this.fields();
    fieldset.forEach((field) => {
      this.form.addControl(field.name, this.initializeFormControl(field), { emitEvent: false})
    });

    return this.form;
  });

  readonly valueChange = outputFromObservable(this.form.valueChanges);

  private initializeFormControl(field: DynamicReactiveFormField): UntypedFormControl {
    const value = field.value;
    const validators = field.validators ? field.validators : [];
    const disabled = field.disabled || this.readonly();
    const control = new UntypedFormControl({ value, disabled }, validators);

    return control;
  }
}
