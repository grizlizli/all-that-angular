import { Validators } from '@angular/forms';

export enum FieldType {
    CHECKBOX = 'CHECKBOX',
    DATEPICKER = 'DATEPICKER',
    RADIO = 'RADIO',
    SELECT_DROPDOWN = 'SELECT_DROPDOWN',
    SELECT_LIST = 'SELECT_LIST',
    SLIDE_TOGGLE = 'SLIDE_TOGGLE',
    TEXTAREA = 'TEXTAREA',
    TEXT_FIELD = 'TEXT_FIELD',
    SUB_HEADER = 'SUB_HEADER',
    DIVIDER = 'DIVIDER'
}

export interface Field<T = any> {
    name: string;
    type: FieldType;
    children?: Field[];
    value?: T;
    placeholder?: string;
    disabled?: boolean;
    options?: KeyValuePair[];
    parent?: string;
    validation?: Validators[];
    visible?: boolean;
}

export interface KeyValuePair {
  key: string;
  value: any;
}

export interface Error {
  name: string;
  text: string;
  rules: Validators[];
}

export class Fieldset {
  constructor() {
    console.log('generators');
  }
}
