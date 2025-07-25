import { InjectionToken, OutputRef } from "@angular/core";

export interface DynamicListItemSelectOutput {
    type: string;
    value: any;
  }

export interface DynamicListItem {
  select: OutputRef<DynamicListItemSelectOutput>;
}

export const DYNAMIC_LIST_ITEM = new InjectionToken<DynamicListItem>('DYNAMIC_LIST_ITEM');
