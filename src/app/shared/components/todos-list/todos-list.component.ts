import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { AsyncPipe } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
    selector: 'mk-todos-list',
    imports: [AsyncPipe, TodoItemComponent],
    templateUrl: './todos-list.component.html',
    styleUrl: './todos-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosListComponent {
  private readonly todosService: TodosService = inject(TodosService);

  readonly todos$ = this.todosService.getTodos();

  addTodo(text: string): void {
    this.todosService.addTodo(text);
  }

  handleCompleteChange(id: number): void {
    this.todosService.toggleTodoCompletion(id);
  }

  handleDeleteTodo(id: number): void {
    this.todosService.deleteTodo(id);
  }
}
