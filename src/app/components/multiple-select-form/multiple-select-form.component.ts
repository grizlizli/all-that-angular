import { Component, effect, HostAttributeToken, inject, input, output } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, map } from 'rxjs';
import { IsSubstringPipe } from '../../pipes/string-is-substring.pipe';
import { outputFromObservable, toSignal } from '@angular/core/rxjs-interop';

export interface FilterControl {
  checked: boolean;
  value: string | number;
  label: string;
}

export interface MultipleSelectForm {
  search: string | null;
  selectAll: boolean | null;
  filters: any[];
}

@Component({
  selector: 'mk-multiple-select-form',
  standalone: true,
  imports: [ReactiveFormsModule, IsSubstringPipe],
  templateUrl: './multiple-select-form.component.html',
  styleUrl: './multiple-select-form.component.scss'
})
export class MultipleSelectFormComponent {
  readonly label = inject(new HostAttributeToken('label'));

  readonly optionLabelKey = inject(new HostAttributeToken('optionLabelKey'), { optional: true});
  readonly optionValueKey = inject(new HostAttributeToken('optionValueKey'), { optional: true});
  readonly options = input.required<any[]>();

  readonly form = new FormGroup({
    search: new FormControl<string>(''),
    selectAll: new FormControl<boolean>(false),
    filters: new FormArray<any>([])
  });

  readonly selectAll = toSignal(this.form.get('selectAll')!.valueChanges, { 
    initialValue: null
  });
  readonly filters = this.form.get('filters') as FormArray;

  readonly valueChange = outputFromObservable<any[]>(
    this.form.valueChanges.pipe(
      map(this.filterSelectedOptions),
      debounceTime(0)
    )
  );

  constructor() {
    effect(() => {
      this.filters.clear();
      this.populateFiltersFormControl(this.options(), this.optionLabelKey, this.optionValueKey);
    });
    effect(() => {
      const selectAll = this.selectAll();
      if (selectAll !== null) {
        this.handleSelectAll(selectAll);
      }
    });
  }

  private populateFiltersFormControl(options: any[], labelKey: string | null, valueKey: string | null) {
    options.forEach(option => {
      this.filters.push(new FormGroup({
        checked: new FormControl(false),
        value: new FormControl(valueKey ? option[valueKey] : option),
        label: new FormControl(labelKey ? option[labelKey] : option)
      }), { 
        emitEvent: false
      });
    });
  }

  private handleSelectAll(selectAll: boolean | null): void {
    this.filters.controls.forEach((group) => group.get('checked')!.reset(selectAll));
  }

  private filterSelectedOptions(formGroup: Partial<MultipleSelectForm>): any[] {
    return formGroup.filters!
      .filter((filter: FilterControl) => filter.checked)
      .map((filter: FilterControl) => filter.value);
  }
}
