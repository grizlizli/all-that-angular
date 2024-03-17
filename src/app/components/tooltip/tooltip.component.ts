import { ChangeDetectionStrategy, Component, HostListener, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'mk-tooltip',
  standalone: true,
  imports: [],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent {
  @Input()
  tooltip: string = '';
  @Input()
  left: number = 0;
  @Input()
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
