import { Validators } from "@angular/forms";
import { DynamicReactiveFormField, DynamicReactiveFormFieldType, DynamicReactiveFormsFieldsSet } from "../../interfaces/dynamic-reactive-form-field.interface";

export const FORM_FIELDS_SET: DynamicReactiveFormsFieldsSet = {
  firstName: {
    value: 'Bonnie',
    type: DynamicReactiveFormFieldType.TEXT_FIELD,
    validators: [ Validators.required, Validators.maxLength(25) ],
    placeholder: 'First name'
  },
  lastName: {
    value: 'Brennan',
    disabled: true,
    type: DynamicReactiveFormFieldType.TEXT_FIELD
  },
  z: {
    value: 'z',
    placeholder: 'z',
    type: DynamicReactiveFormFieldType.TEXT_FIELD
  },
  a: {
    value: 'a',
    placeholder: 'a',
    type: DynamicReactiveFormFieldType.TEXT_FIELD
  },
  textarea: {
    type: DynamicReactiveFormFieldType.TEXT_AREA,
    value: null,
    placeholder: 'Tell us more about yourself',
    validators: [ Validators.required, Validators.minLength(25) ],
  }
};

export const FORM_FIELDS_DATA: DynamicReactiveFormField[] = [
  {
    name: 'firstName',
    value: '',
    type: DynamicReactiveFormFieldType.TEXT_FIELD,
    validators: [ Validators.required, Validators.maxLength(25) ],
    placeholder: 'John',
    label: 'First name'
  },
  {
    name: 'lastName',
    value: '',
    type: DynamicReactiveFormFieldType.TEXT_FIELD,
    validators: [ Validators.required, Validators.minLength(3) ],
    placeholder: 'Doe',
    label: 'Last name'
  },
  {
    name: 'tsnFamiliarity',
    value: true,
    type: DynamicReactiveFormFieldType.CHECK_BOX,
    validators: [ Validators.requiredTrue ],
    label: 'Have you heard of TechStackNation?',
    disabled: false
  },
  {
    name: 'meeting',
    value: null,
    type: DynamicReactiveFormFieldType.DATE_PICKER,
    label: 'Schedule meeting',
    disabled: false
  },
  {
    name: 'textarea',
    type: DynamicReactiveFormFieldType.TEXT_AREA,
    validators: [ Validators.required, Validators.minLength(3) ],
    value: null,
    placeholder: 'Tell us more about yourself and your career plans'
  }
];
