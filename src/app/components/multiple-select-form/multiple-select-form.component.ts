import { Component, effect, HostAttributeToken, inject, input } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, map } from 'rxjs';
import { IsSubstringPipe } from '../../pipes/string-is-substring.pipe';
import { outputFromObservable, toSignal } from '@angular/core/rxjs-interop';

export interface FilterFormGroup {
  checked: boolean;
  value: any;
  label: string;
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
  readonly filters = this.form.get('filters') as FormArray;
  readonly selectAll = toSignal(this.form.get('selectAll')!.valueChanges, { 
    initialValue: null
  });
  readonly search = toSignal(this.form.get('search')!.valueChanges, {
    initialValue: this.form.get('search')!.value
  });

  readonly valueChange = outputFromObservable<any[]>(
    this.filters.valueChanges.pipe(
      debounceTime(0),
      map(this.filterSelectedOptions),
    )
  );

  constructor() {
    effect(() => {
      this.filters.clear();
      this.populateFiltersFormArray(this.options(), this.optionLabelKey, this.optionValueKey);
    });
    effect(() => {
      const selectAll = this.selectAll();
      if (selectAll !== null) {
        this.handleSelectAll(selectAll);
      }
    });
  }

  private populateFiltersFormArray(options: any[], labelKey: string | null, valueKey: string | null) {
    options.forEach(option => {
      this.filters.push(new FormGroup({
        checked: new FormControl(false),
        value: new FormControl(valueKey ? option[valueKey] : option),
        label: new FormControl(labelKey ? `${option[labelKey]}` : `${option}`)
      }), { 
        emitEvent: false
      });
    });
  }

  private handleSelectAll(selectAll: boolean | null): void {
    this.filters.controls.forEach((group) => group.get('checked')!.setValue(selectAll));
  }

  private filterSelectedOptions(formGroups: FilterFormGroup[]): any[] {
    return formGroups
      .filter((group: FilterFormGroup) => group.checked)
      .map(group => group.value);
  }
}
