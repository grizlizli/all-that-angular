import { Component, TemplateRef, Type, viewChild } from '@angular/core';
import { TooltipDirective } from '../../components/tooltip/tooltip.directive';
import { MultipleSelectFormComponent } from '../../components/multiple-select-form/multiple-select-form.component';
import { TodoItemComponent } from '../../components/todo-item/todo-item.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { FORM_FIELDS_DATA, FORM_FIELDS_SET } from './form-fields.mock';
import { DynamicReactiveFormField, DynamicReactiveFormsFieldsSet } from '../../interfaces/dynamic-reactive-form-field.interface';
import { DynamicReactiveFormComponent } from '../../components/dynamic-reactive-form/dynamic-reactive-form.component';
import { DynamicFormComponent } from '../../components/dynamic-form/dynamic-form.component';

@Component({
    selector: 'mk-playground-page',
    standalone: true,
    imports: [
      MatExpansionModule,
      TooltipDirective,
      MultipleSelectFormComponent,
      TodoItemComponent,
      DynamicReactiveFormComponent,
      DynamicFormComponent
    ],
    templateUrl: './playground-page.component.html',
    styleUrl: './playground-page.component.scss'
})
export class PlaygroundPageComponent {
  readonly title = 'Playground'
  readonly templateRef = viewChild<TemplateRef<any>>('anotherTooltipRef');
  readonly TodoItemComponent: Type<TodoItemComponent> = TodoItemComponent;
  readonly customUrlTooltip: string = '<p class="p-tooltip">This is a <a href="#">link</a>.</p>';

  readonly multipleSelectOptions = [
    { id: 1, skill: 'Frontend Developer'},
    { id: 2, skill: 'Backend Developer'},
    { id: 3, skill: 'Fullstack Developer'}
  ];

  dynamicFiltersValue: string[] = [];

  readonly fields: DynamicReactiveFormField[] = FORM_FIELDS_DATA;

  readonly fieldsSet : DynamicReactiveFormsFieldsSet = FORM_FIELDS_SET;

  dynamicFormValueChange(value: any) {
    console.log(value);
  }

  dynamicFormValueChange2(value: any) {
    console.log(value);
  }

  optionsSelectionChange(options: any[]) {
    console.log('optionsSelectionChange', options);
    this.dynamicFiltersValue = options;
  }
}
