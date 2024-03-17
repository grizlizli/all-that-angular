import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './components/tooltip/tooltip.directive';
import { TodosListComponent } from './components/todos-list/todos-list.component';

@Component({
  selector: 'mk-root',
  standalone: true,
  imports: [CommonModule, TooltipDirective, TodosListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'All That Angular';
}
