import { Component, computed, inject, input, output } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { DynamicFormFieldComponent } from '../dynamic-form-field/dynamic-form-field.component';
import { Field } from '../../models/dynamic-reactive-form.model';

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

  readonly valueChange = output<any>();

  readonly form = computed(() => {
    const form = this.formBuilder.group({});
    const fieldset = this.fieldset();
    console.log('form computed', fieldset);
    fieldset.forEach((field) => {
      form.addControl(field.name, this.initializeFormControl(field))
    });

    console.log()

    return form;
  });



  private initializeFormControl(field: Field): UntypedFormControl {
    let value;

    /**
     * Populate defaultValues from constants if assigned
     */
    if (typeof field.value !== 'undefined') {
      value = field.value;
    }

    //const validation = field.validation ? field.validation : [];
    const isDisabled = field.disabled || this.readonly() ? true : false;
    /**
     * That's it, we're done! Return our new Form Control up to the form.
     */
    return this.formBuilder.control({ value, disabled: isDisabled });
  }

  //form!: UntypedFormGroup;
}
