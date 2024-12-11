import { Component, TemplateRef, Type, viewChild } from '@angular/core';
import { TooltipDirective } from '../../components/tooltip/tooltip.directive';
import { MultipleSelectFormComponent } from '../../components/multiple-select-form/multiple-select-form.component';
import { TodoItemComponent } from '../../components/todo-item/todo-item.component';
import { DynamicFormComponent } from '../../components/dynamic-form/dynamic-form.component';
import { FieldType } from '../../models/dynamic-reactive-form.model';
import { Validators } from '@angular/forms';

@Component({
    selector: 'mk-playground-page',
    standalone: true,
    imports: [TooltipDirective, MultipleSelectFormComponent, TodoItemComponent, DynamicFormComponent],
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

  formFields = [
    {
      name: 'firstName',
      type: FieldType.TEXT_FIELD,
      validation: [ Validators.required, Validators.maxLength(25) ]
    },
    {
      name: 'lastName',
      type: FieldType.TEXT_FIELD
    },
    // {
    //   name: 'favoriteFood',
    //   type: FieldType.SELECTDROPDOWN,
    //   options: ['Ice Cream', 'Pizza', 'Tacos']
    // },
    // {
    //   name: 'favoriteColor',
    //   type: FieldType.SELECTDROPDOWN,
    //   options: ['Red', 'Blue', 'Yellow']
    // }
  ];

  optionsSelectionChange(options: any[]) {
    console.log('optionsSelectionChange', options);
    this.dynamicFiltersValue = options;
  }
}
