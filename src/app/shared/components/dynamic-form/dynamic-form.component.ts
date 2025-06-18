import { Component, computed, input, signal } from '@angular/core';
import { ReactiveFormsModule, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { DynamicFormFieldComponent } from '../dynamic-form-field/dynamic-form-field.component';
import { outputFromObservable } from '@angular/core/rxjs-interop';
import { DynamicReactiveFormControlConfig, DynamicReactiveFormsFieldsSet } from '../../../core/interfaces/dynamic-reactive-form-field.interface';

@Component({
  selector: 'mk-dynamic-form',
  imports: [ReactiveFormsModule, DynamicFormFieldComponent],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent {
  private readonly form = new UntypedFormGroup({});

  readonly fieldsSet = input.required<DynamicReactiveFormsFieldsSet>();
  readonly readonly = input<boolean>(false);

  readonly formFieldset = computed(() => {
    this.form.reset({}, {emitEvent: false});

    Object.keys(this.fieldsSet()).forEach((controlName: string) =>
      this.form.addControl(controlName, this.initializeFormControl(this.fieldsSet()[controlName]), { emitEvent: false})
    );

    return this.form;
  });

  readonly fields = computed<any[]>(() => {
    const fieldsSet = this.fieldsSet();
    return Object.keys(fieldsSet).map(key => {
      return {
        ...fieldsSet[key],
        name: key
      };
    });
  })

  readonly valueChange = outputFromObservable(this.form.valueChanges);

  private initializeFormControl(field: DynamicReactiveFormControlConfig): UntypedFormControl {
    const validators = field.validators ? field.validators : [];
    const disabled = field.disabled || this.readonly();
    const control = new UntypedFormControl({ value: field.value, disabled }, validators);

    return control;
  }
}
