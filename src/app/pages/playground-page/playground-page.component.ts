import { Component, TemplateRef, Type, viewChild } from '@angular/core';
import { TooltipDirective } from '../../components/tooltip/tooltip.directive';
import { MultipleSelectFormComponent } from '../../components/multiple-select-form/multiple-select-form.component';
import { TodoItemComponent } from '../../components/todo-item/todo-item.component';

@Component({
    selector: 'mk-playground-page',
    imports: [TooltipDirective, MultipleSelectFormComponent, TodoItemComponent],
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

  optionsSelectionChange(options: any[]) {
    console.log('optionsSelectionChange', options);
    this.dynamicFiltersValue = options;
  }
}
