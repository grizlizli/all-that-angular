import { Component, inject } from '@angular/core';
import { DYNAMIC_LIST_DATA } from '../dynamic-list/dynamic-list.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'mk-dynamic-list-item-example1',
  imports: [JsonPipe],
  templateUrl: './dynamic-list-item-example1.component.html',
  styleUrl: './dynamic-list-item-example1.component.scss'
})
export class DynamicListItemExample1Component {
  readonly data = inject(DYNAMIC_LIST_DATA, {
    optional: true
  })
}
