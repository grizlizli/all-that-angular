import { ChangeDetectionStrategy, Component, Inject, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TooltipDirective } from './components/tooltip/tooltip.directive';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { ApiService } from './services/api.service';

@Component({
  selector: 'mk-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TooltipDirective, TodosListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  private readonly api: ApiService = inject(ApiService);
  title = 'All That Angular';

  ngOnInit(): void {
    this.api.get<any>('test', {bla: 1}).subscribe({
      next: (res) => console.log(res),
      error: (error) => console.log(error)
    });
    this.api.post<any>('bla', {}).subscribe({
      next: (res) => console.log(res),
      error: (error) => console.log(error)
    });
  }
}
