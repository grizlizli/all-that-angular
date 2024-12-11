import { Component, TemplateRef, Type, viewChild } from '@angular/core';
import { TooltipDirective } from '../../components/tooltip/tooltip.directive';
import { MultipleSelectFormComponent } from '../../components/multiple-select-form/multiple-select-form.component';
import { TodoItemComponent } from '../../components/todo-item/todo-item.component';
import { DynamicFormComponent } from '../../components/dynamic-form/dynamic-form.component';
import { Field, FieldType } from '../../models/dynamic-reactive-form.model';
import { Validators } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';

const FORM_FIELDS_DATA: Field[] = [
  {
    name: 'firstName',
    value: 'Milos',
    type: FieldType.TEXT_FIELD,
    validators: [ Validators.required, Validators.maxLength(25) ],
    placeholder: 'First name'
  },
  {
    name: 'lastName',
    value: null,
    type: FieldType.TEXT_FIELD,
    validators: [ Validators.required, Validators.minLength(3) ],
    placeholder: 'Last name'
  },
  {
    name: 'favoriteFood',
    type: FieldType.SELECT_DROPDOWN,
    options: ['Ice Cream', 'Pizza', 'Tacos'],
    placeholder: 'Favorite Pizza'
  },
  {
    name: 'favoriteColor',
    type: FieldType.SELECT_DROPDOWN,
    options: ['Red', 'Blue', 'Yellow'],
    placeholder: 'Favorite Color'
  },
  {
    name: 'phone',
    type: FieldType.TEXT_FIELD,
    placeholder: '+381606044114',
    subtype: 'phone'
  },
  {
    name: 'email',
    type: FieldType.TEXT_FIELD,
    placeholder: 'mustackioengineering@gmail.com',
    subtype: 'email'
  },
  {
    name: 'favoriteSeason',
    type: FieldType.SELECT_DROPDOWN,
    options: ['Spring', 'Summer', 'Fall', 'Winter'],
    placeholder: 'Summer'
  },
  {
    name: 'favoriteMusic',
    type: FieldType.SELECT_DROPDOWN,
    options: [
      {id: 1, name: 'Classic'},
      {id: 2, name: 'Country' },
      {id: 3, name: 'Folk'},
      {id: 4, name: 'Rap'},
      {id: 5, name: 'Rock'}
    ],
    optionKey: 'name',
    optionValueKey: 'id',
    placeholder: 'Hip-Hop'
  },
  {
    name: 'birthday',
    type: FieldType.DATE_PICKER,
    placeholder: '01.01.1970'
  },
  {
    name: 'joinMailingList',
    type: FieldType.SLIDE_TOGGLE,
    value: true,
    children: [
      {
        name: 'streetAddress',
        type: FieldType.TEXT_FIELD
      },
      {
        name: 'city',
        type: FieldType.TEXT_FIELD
      },
      {
        name: 'state',
        type: FieldType.TEXT_FIELD
      },
      {
        name: 'zip',
        type: FieldType.TEXT_FIELD
      },
      {
        name: 'date',
        type: FieldType.DATE_PICKER
      }
    ]
  }
];

@Component({
    selector: 'mk-playground-page',
    standalone: true,
    imports: [
      MatExpansionModule,
      TooltipDirective,
      MultipleSelectFormComponent,
      TodoItemComponent,
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

  readonly formFields: Field[] = FORM_FIELDS_DATA;

  dynamicFormValueChange(value: any) {
    console.log(value);
  }

  optionsSelectionChange(options: any[]) {
    console.log('optionsSelectionChange', options);
    this.dynamicFiltersValue = options;
  }
}
