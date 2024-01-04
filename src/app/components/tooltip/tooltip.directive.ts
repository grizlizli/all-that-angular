import { ApplicationRef, ComponentRef, Directive, ElementRef, HostListener, Injector, Input, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, Observable, Subject, debounceTime, takeUntil } from 'rxjs';
import { TooltipComponent } from './tooltip.component';

@Directive({
  selector: '[mkTooltip]',
  standalone: true
})
export class TooltipDirective implements OnInit, OnDestroy {
  @Input({alias: 'mkTooltip', required: true}) tooltip: string = '';

  private readonly displaySubject = new BehaviorSubject<boolean>(false);
  private readonly display$: Observable<boolean> = this.displaySubject;

  private readonly destroy$: Subject<void> = new Subject<void>();

  private componentRef: ComponentRef<TooltipComponent> | null = null;

  constructor(private readonly elementRef: ElementRef, private readonly appRef: ApplicationRef,
    private readonly viewContainerRef: ViewContainerRef, private readonly injector: Injector) {
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.displaySubject.next(true);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.displaySubject.next(false);
  }

  ngOnInit(): void {
      this.display$.pipe(
        debounceTime(700),
        takeUntil(this.destroy$)
      ).subscribe((displayed: boolean) => {
        if (displayed) {
          this.initializeTooltip();
        }
        else {
          this.destroyTooltip();
        }
      });
  }

  ngOnDestroy(): void {
    this.destroyTooltip();
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initializeTooltip(): void {
    if (this.componentRef === null && this.tooltip) {
      this.componentRef = this.viewContainerRef.createComponent(TooltipComponent, { injector: this.injector });
      this.setTooltipComponentProperties();
      this.appRef.attachView(this.componentRef.hostView);
    }
  }

  private setTooltipComponentProperties(): void {
    if (this.componentRef !== null) {
      this.componentRef.instance.tooltip = this.tooltip;
      this.componentRef.instance.displaySubject = this.displaySubject;

      const { left, right, top } = this.elementRef.nativeElement.getBoundingClientRect();

      this.componentRef.instance.left = Math.round((right - left) / 2 + left);
      this.componentRef.instance.top = Math.round(top - 4);

      this.componentRef.changeDetectorRef.detectChanges();
    }
  }

  private destroyTooltip(): void {
    if (this.componentRef !== null) {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }
}

