import { Component, inject } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { AsyncPipe } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { API_ENDPOINT_CONFIG, ApiService } from '../../services/api.service';

@Component({
  selector: 'mk-todos-list',
  standalone: true,
  imports: [AsyncPipe, TodoItemComponent],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  providers: [
    ApiService, 
    {
      provide: API_ENDPOINT_CONFIG,
      useValue: {
        endpoint: 'http://localhost:8000',
        version: '2',
        prefix: 'api'
      }
    }
  ]
})
export class TodosListComponent {
  private readonly todosService: TodosService = inject(TodosService);
  private readonly api: ApiService = inject(ApiService);

  readonly todos$ = this.todosService.getTodos();

  ngOnInit(): void {
    this.api.get<any>('new-endpoint').subscribe({
      error: (error) => console.log('new enpoint', error)
    });
  }

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
