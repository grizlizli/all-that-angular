import { Validators } from "@angular/forms";
import { DynamicReactiveFormField, DynamicReactiveFormFieldType } from "../../interfaces/dynamic-reactive-form-field.interface";


export const FORM_FIELDS_DATA: DynamicReactiveFormField[] = [
  {
    name: 'firstName',
    value: 'Bonnie',
    type: DynamicReactiveFormFieldType.TEXT_FIELD,
    validators: [ Validators.required, Validators.maxLength(25) ],
    placeholder: 'First name'
  },
  {
    name: 'lastName',
    value: 'Brennan',
    type: DynamicReactiveFormFieldType.TEXT_FIELD,
    validators: [ Validators.required, Validators.minLength(3) ],
    placeholder: 'Last name'
  },
  {
    name: 'usCitizen',
    value: true,
    type: DynamicReactiveFormFieldType.CHECK_BOX,
    placeholder: 'Are you a US citizen?',
    disabled: false
  },
  {
    name: 'favoriteColor',
    type: DynamicReactiveFormFieldType.SELECT_DROPDOWN,
    options: ['Red', 'Blue', 'Yellow'],
    placeholder: 'Favorite Color'
  },
  {
    name: 'phone',
    type: DynamicReactiveFormFieldType.TEXT_FIELD,
    placeholder: '+1xxxxxxxxxxx',
    subtype: 'phone'
  },
  {
    name: 'email',
    type: DynamicReactiveFormFieldType.TEXT_FIELD,
    placeholder: 'letstalk@capaciteam.com',
    subtype: 'email'
  },
  {
    name: 'favoriteSeason',
    type: DynamicReactiveFormFieldType.SELECT_DROPDOWN,
    options: ['Spring', 'Summer', 'Fall', 'Winter'],
    placeholder: 'Summer'
  },
  {
    name: 'favoriteMusic',
    type: DynamicReactiveFormFieldType.SELECT_DROPDOWN,
    options: [
      {id: 1, name: 'Classic'},
      {id: 2, name: 'Country' },
      {id: 3, name: 'Folk'},
      {id: 4, name: 'Rap'},
      {id: 5, name: 'Rock'}
    ],
    optionKey: 'name',
    optionValueKey: 'id',
    placeholder: 'Rap'
  },
  {
    name: 'birthday',
    type: DynamicReactiveFormFieldType.DATE_PICKER,
    placeholder: '01.01.1970'
  },
];
