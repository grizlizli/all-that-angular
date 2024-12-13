import { Component, input } from '@angular/core';

@Component({
  selector: 'mk-dynamic-reactive-form-field-errors',
  imports: [],
  templateUrl: './dynamic-reactive-form-field-errors.component.html',
  styleUrl: './dynamic-reactive-form-field-errors.component.scss'
})
export class DynamicReactiveFormFieldErrorsComponent {
  readonly errors = input<any>();
  readonly touched = input<boolean>();
}
