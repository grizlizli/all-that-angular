import { ValidatorFn } from "@angular/forms";

export enum DynamicReactiveFormFieldType {
  TEXT_AREA = 'TEXT_AREA',
  TEXT_FIELD = 'TEXT_FIELD',
  CHECK_BOX = 'CHECK_BOX',
  DATE_PICKER = 'DATE_PICKER',
  RADIO = 'RADIO',
  SELECT_DROPDOWN = 'SELECT_DROPDOWN',
  SELECT_LIST = 'SELECT_LIST',
  SUBHEADER = 'SUBHEADER',
  DIVIDER = 'DIVIDER'
}

export interface DynamicReactiveFormField<T = any> {
  name: string;
  type: DynamicReactiveFormFieldType;
  // if type is TEXT_FIELD
  subtype?: 'text' | 'tel' | 'phone' | 'number' | 'email';
  value?: T;
  validators?: ValidatorFn[];
  placeholder?: string;
  disabled?: boolean;
  options?: any[] | string[];
  optionKey?: string;
  optionValueKey?: string;
  // parent?: string;
  // children?: DynamicReactiveFormField[];
  // visible?: boolean;
}

export interface DynamicReactiveFormControlConfig<T = any> {
  type: DynamicReactiveFormFieldType;
  // if type is TEXT_FIELD
  subtype?: 'text' | 'tel' | 'phone' | 'number' | 'email';
  value?: T;
  validators?: ValidatorFn[];
  placeholder?: string;
  disabled?: boolean;
  options?: any[] | string[];
  optionKey?: string;
  optionValueKey?: string;
}

export type DynamicReactiveFormsFieldsSet = { [controlName: string]: DynamicReactiveFormControlConfig };
