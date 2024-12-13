import { Validators } from "@angular/forms";
import { DynamicReactiveFormField, DynamicReactiveFormFieldType } from "../../interfaces/dynamic-reactive-form-field.interface";

export type DynamicReactiveFormsFieldsSet = { [key: string]: DynamicReactiveFormField };

export const FORM_FIELDS_SET: DynamicReactiveFormsFieldsSet = {
  firstName: {
    // I DONT WANT TO USE name PROP
    name: '--firstName',
    value: 'Bonnie',
    type: DynamicReactiveFormFieldType.TEXT_FIELD,
    validators: [ Validators.required, Validators.maxLength(25) ],
    placeholder: 'First name'
  },
  lastName: {
    // I DONT WANT TO USE name PROP
    name: '--lastName',
    value: 'Brennan',
    disabled: true,
    type: DynamicReactiveFormFieldType.TEXT_FIELD
  },
  z: {
    // I DONT WANT TO USE name PROP
    name: '--z',
    value: 'z',
    placeholder: 'z',
    type: DynamicReactiveFormFieldType.TEXT_FIELD
  },
  a: {
    // I DONT WANT TO USE name PROP
    name: '--a',
    value: 'a',
    placeholder: 'a',
    type: DynamicReactiveFormFieldType.TEXT_FIELD
  },
  textarea: {
    name: 'textarea',
    type: DynamicReactiveFormFieldType.TEXT_AREA,
    value: null,
    placeholder: 'Tell us more about yourself'
  }
};

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
    name: 'textarea',
    type: DynamicReactiveFormFieldType.TEXT_AREA,
    validators: [ Validators.required, Validators.minLength(3) ],
    value: null,
    placeholder: 'Tell us more about yourself'
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
