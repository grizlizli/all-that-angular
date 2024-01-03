import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TooltipComponent } from './components/tooltip/tooltip.component';

@Component({
  selector: 'mk-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TooltipComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'all-that-angular';
}
