import { Component } from '@angular/core';

@Component({
  selector: 'mk-tooltip',
  standalone: true,
  imports: [],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss'
})
export class TooltipComponent {
  tooltip: string = '';
}


