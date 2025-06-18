import { computed, inject, Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {
  private readonly small = '(max-width: 600px)';
  private readonly medium = '(min-width: 601px) and (max-width: 1000px)';
  private readonly large = '(min-width: 1001px)';

  private readonly breakpointObserver = inject(BreakpointObserver);
  private readonly screenWidth$ = this.breakpointObserver.observe([this.small, this.medium, this.large]);

  readonly screenWidth = toSignal(this.screenWidth$);
  readonly smallWidth = computed(() => this.screenWidth()?.breakpoints[this.small]);
  readonly mediumWidth = computed(() => this.screenWidth()?.breakpoints[this.medium]);
  readonly largeWidth = computed(() => this.screenWidth()?.breakpoints[this.large]);
}
