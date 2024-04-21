import { Component, ElementRef, TemplateRef, viewChild, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './components/tooltip/tooltip.directive';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'mk-root',
  standalone: true,
  imports: [CommonModule, TooltipDirective, TodosListComponent, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly title = 'All That Angular';
  //@ViewChild('anotherTooltipRef', {static: true}) templateRef?: TemplateRef<any>;
  templateRef = viewChild<TemplateRef<any>>('anotherTooltipRef');
}
