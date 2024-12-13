import { Component, computed, input, signal } from '@angular/core';
import { ReactiveFormsModule, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { DynamicFormFieldComponent } from '../dynamic-form-field/dynamic-form-field.component';
import { outputFromObservable } from '@angular/core/rxjs-interop';
import { DynamicReactiveFormField } from '../../interfaces/dynamic-reactive-form-field.interface';
import { DynamicReactiveFormsFieldsSet } from '../../pages/playground-page/form-fields.mock';

function* formFieldsGenerator(fieldsSet: DynamicReactiveFormsFieldsSet) {
  for (const key of Object.keys(fieldsSet)) {
    yield { key, controlConfig: fieldsSet[key] };
  }
}

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

    // const fieldIterator = formFieldsGenerator(this.fieldsSet());
    // for (const { key, controlConfig } of fieldIterator) {
    //   this.form.addControl(key, this.initializeFormControl(controlConfig), { emitEvent: false});
    // }

    Object.keys(this.fieldsSet()).forEach((controlName: string) =>
      this.form.addControl(controlName, this.initializeFormControl(this.fieldsSet()[controlName]), { emitEvent: false})
    );

    return this.form;
  });

  readonly controls = computed<any[]>(() => {
    const fieldsSet = this.fieldsSet();
    return Object.keys(fieldsSet).map(key => {
      return {
        ...fieldsSet[key],
        name: key
      };
    });
  })

  readonly valueChange = outputFromObservable(this.form.valueChanges);

  private initializeFormControl(field: DynamicReactiveFormField): UntypedFormControl {
    const validators = field.validators ? field.validators : [];
    const disabled = field.disabled || this.readonly();
    const control = new UntypedFormControl({ value: field.value, disabled }, validators);

    return control;
  }
}
