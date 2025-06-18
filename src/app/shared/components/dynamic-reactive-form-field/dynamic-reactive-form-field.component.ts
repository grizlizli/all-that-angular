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
import { DynamicReactiveFormField, DynamicReactiveFormFieldType } from '../../../core/interfaces/dynamic-reactive-form-field.interface';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'mk-dynamic-reactive-form-field',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    NgTemplateOutlet
  ],
  templateUrl: './dynamic-reactive-form-field.component.html',
  styleUrl: './dynamic-reactive-form-field.component.scss'
})
export class DynamicReactiveFormFieldComponent {
  private readonly formGroupDirective = inject(FormGroupDirective);
  readonly DynamicReactiveFormFieldType = DynamicReactiveFormFieldType;
  readonly field = input.required<DynamicReactiveFormField>();

  readonly control = computed<UntypedFormControl>(() => {
    return this.formGroupDirective.control.get(this.field().name) as UntypedFormControl;
  });
}
