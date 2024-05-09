import { Component, effect, input, output } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { map } from 'rxjs';
import { StringIsSubstringPipe } from '../../pipes/string-is-substring.pipe';

@Component({
  selector: 'mk-dynamic-filters',
  standalone: true,
  imports: [ReactiveFormsModule, StringIsSubstringPipe],
  templateUrl: './dynamic-filters.component.html',
  styleUrl: './dynamic-filters.component.scss'
})
export class DynamicFiltersComponent {
  options = input.required<string[]>();
  form = new FormGroup({
    query: new FormControl(''),
    filters: new FormArray([])
  });

  filters = this.form.get('filters') as FormArray;

  // #valueChanges$ = this.form.valueChanges.pipe(
  //   map((value: any) => value.filters!
  //     .filter((filter: any) => filter.checked)
  //     .map((filter: any) => filter.value)
  //   )
  // );

  valueChange = output<string[]>();

  constructor() {
    effect(() => {
      this.filters.clear();
      const options = this.options();
      this.populateFiltersFormControl(options);
    });
  }

  populateFiltersFormControl(options: string[]) {
    options.forEach(option => {
      this.filters.push(new FormGroup({
        checked: new FormControl(false),
        value: new FormControl(option)
      }), { emitEvent: false });
    });
  }

  onSubmit() {
    const formValue = this.form.value;
    const value = formValue.filters!.filter((filter: any) => filter.checked)
      .map((filter: any) => filter.value);

    this.valueChange.emit(value);
  }

  reset() {
    this.form.get('query')!.reset();
    this.filters.controls.forEach((group) => group.get('checked')!.reset());
  }
}
