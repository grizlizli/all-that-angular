import { ApplicationRef, ComponentRef, Directive, ElementRef, HostListener, Injector, Input, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, Observable, Subject, debounceTime, takeUntil } from 'rxjs';
import { TooltipComponent } from './tooltip.component';

@Directive({
  selector: '[mkTooltip]',
  standalone: true
})
export class TooltipDirective implements OnInit, OnDestroy {
  @Input({alias: 'mkTooltip', required: true}) tooltip: string = '';

  display$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private destroy$: Subject<void> = new Subject<void>();

  private componentRef: ComponentRef<TooltipComponent> | null = null;

  get isDisplayed$(): Observable<boolean> {
    return this.display$.asObservable();
  }

  constructor(private elementRef: ElementRef, private appRef: ApplicationRef,
    private viewContainerRef: ViewContainerRef, private injector: Injector) {
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.display$.next(true);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.display$.next(false);
  }

  ngOnInit(): void {
      this.isDisplayed$.pipe(debounceTime(700), takeUntil(this.destroy$)).subscribe((displayed: boolean) => {
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
      this.componentRef.instance.display$ = this.display$;

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

