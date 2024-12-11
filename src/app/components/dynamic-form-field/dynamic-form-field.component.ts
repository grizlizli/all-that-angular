import { Component, computed, inject, input } from '@angular/core';
import { FormGroupDirective, ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Field, FieldType } from '../../models/dynamic-reactive-form.model';

@Component({
  selector: 'mk-dynamic-form-field',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule
  ],
  templateUrl: './dynamic-form-field.component.html',
  styleUrl: './dynamic-form-field.component.scss'
})
export class DynamicFormFieldComponent {
  private readonly formGroupDirective = inject(FormGroupDirective);
  readonly FieldType = FieldType;
  readonly field = input.required<Field>();

  readonly control = computed<UntypedFormControl>(() => {
    return this.formGroupDirective.control.get(this.field().name) as UntypedFormControl;
  });
}
