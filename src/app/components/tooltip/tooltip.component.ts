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
  @Input({required: true})
  tooltip!: string;
  @Input({required: true})
  left!: number;
  @Input({required: true})
  top!: number;
  @Input({required: true})
  displaySubject!: BehaviorSubject<boolean>;
  @Input({required: true})
  hasTemplate!: boolean;

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.displaySubject.next(true);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.displaySubject.next(false);
  }
}
