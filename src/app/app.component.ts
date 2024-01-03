import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TooltipDirective } from './components/tooltip/tooltip.directive';

@Component({
  selector: 'mk-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TooltipDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'all-that-angular';
}
