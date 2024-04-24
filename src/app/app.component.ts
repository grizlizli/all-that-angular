import { Component, TemplateRef, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './components/tooltip/tooltip.directive';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

@Component({
  selector: 'mk-root',
  standalone: true,
  imports: [CommonModule, TooltipDirective, TodosListComponent, RouterOutlet, RouterLink, TodoItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly title = 'All That Angular';
  //@ViewChild('anotherTooltipRef', {static: true}) templateRef?: TemplateRef<any>;
  readonly templateRef = viewChild<TemplateRef<any>>('anotherTooltipRef');
  readonly TodoItemComponent = TodoItemComponent;

  customUrlTooltip: string = '<p class="p-tooltip">This is a <a href="#">link</a>.</p>';
}
