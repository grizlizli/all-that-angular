import { Component, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'mk-tooltip',
  standalone: true,
  imports: [],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss'
})
export class TooltipComponent {
  tooltip: string = '';
  left: number = 0;
  top: number = 0;
  displaySubject: BehaviorSubject<boolean> | null = null;

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (this.displaySubject) {
      this.displaySubject.next(true);
    }
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    if (this.displaySubject) {
      this.displaySubject.next(false);
    }
  }
}
