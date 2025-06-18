import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from '../../core/interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private readonly todosSubject: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);

  getTodos(): Observable<Todo[]> {
    return this.todosSubject.asObservable();
  }

  addTodo(text: string): void {
    const todo: Todo = {
      id: Date.now(),
      completed: false,
      text
    };

    this.todosSubject.next([...this.todosSubject.value, todo]);
  }

  toggleTodoCompletion(id: number): void {
    const todos: Todo[] = this.todosSubject.value.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
    this.todosSubject.next(todos);
  }

  deleteTodo(id: number): void {
    const todos: Todo[] = this.todosSubject.value.filter(todo => todo.id !== id);
    this.todosSubject.next(todos);
  }
}
