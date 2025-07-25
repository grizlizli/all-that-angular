import { NgComponentOutlet } from '@angular/common';
import { Component, inject, InjectionToken, Injector, input, Type } from '@angular/core';

export const DYNAMIC_LIST_DATA = new InjectionToken<any>('DYNAMIC_LIST_DATA')

@Component({
  selector: 'mk-dynamic-list',
  imports: [NgComponentOutlet],
  templateUrl: './dynamic-list.component.html',
  styleUrl: './dynamic-list.component.scss'
})
export class DynamicListComponent {
  private readonly injector = inject(Injector);
  readonly items = input.required<{ type: any, data: any[] }[]>();

  createInjector(data: any): Injector {
    return Injector.create({
      providers: [{ provide: DYNAMIC_LIST_DATA, useValue: data }],
      parent: this.injector,
    });
  }
}
