import { Component, TemplateRef, Type, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './components/tooltip/tooltip.directive';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { MultipleSelectFormComponent } from './components/multiple-select-form/multiple-select-form.component';

@Component({
  selector: 'mk-root',
  standalone: true,
  imports: [CommonModule, TooltipDirective, TodosListComponent, RouterOutlet, RouterLink, MultipleSelectFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly title = 'All That Angular';
  //@ViewChild('anotherTooltipRef', {static: true}) templateRef?: TemplateRef<any>;
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
