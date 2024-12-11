import { ValidatorFn } from '@angular/forms';

export enum FieldType {
    CHECKBOX = 'CHECKBOX',
    DATE_PICKER = 'DATE_PICKER',
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
    subtype?: 'text' | 'tel' | 'phone' | 'number' | 'email';
    children?: Field[];
    value?: T;
    placeholder?: string;
    disabled?: boolean;
    options?: any[] | string[];
    optionKey?: string;
    optionValueKey?: string;
    parent?: string;
    validators?: ValidatorFn[];
    visible?: boolean;
}
