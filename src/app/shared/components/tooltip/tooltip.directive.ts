import { ApplicationRef, ComponentRef, DestroyRef, Directive, ElementRef, inject, Input, OnDestroy, OnInit, TemplateRef, Type, ViewContainerRef, DOCUMENT } from '@angular/core';
import { EMPTY, fromEvent, merge, switchMap, takeUntil, tap, timer } from 'rxjs';
import { TooltipComponent } from './tooltip.component';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export type Content<T> = string | TemplateRef<T> | Type<T>;

@Directive({
  selector: '[mkTooltip]',
  standalone: true
})
export class TooltipDirective implements OnInit, OnDestroy {
  @Input({ alias: 'mkTooltip', required: true }) tooltip: string = '';
  @Input() template?: Content<any>;

  private readonly elementRef: ElementRef = inject(ElementRef);
  private readonly appRef: ApplicationRef = inject(ApplicationRef);
  private readonly viewContainerRef: ViewContainerRef = inject(ViewContainerRef);
  private readonly document: Document = inject(DOCUMENT);
  private readonly destroyRef: DestroyRef = inject(DestroyRef);

  private componentRef: ComponentRef<TooltipComponent> | null = null;

  ngOnInit(): void {
    const hostMouseEnter$ = fromEvent(this.elementRef.nativeElement, 'mouseenter');
    const hostMouseLeave$ = fromEvent(this.elementRef.nativeElement, 'mouseleave');

    hostMouseEnter$.pipe(
      tap(() => this.initializeTooltip()),
      switchMap(() => {
        const tooltipElement = this.componentRef?.location.nativeElement;
        if (!tooltipElement) return EMPTY;

        const tooltipMouseEnter$ = fromEvent(tooltipElement, 'mouseenter');
        const tooltipMouseLeave$ = fromEvent(tooltipElement, 'mouseleave');

        // Merge all "enter" events (hovering over host or tooltip)
        const anyMouseEnter$ = merge(hostMouseEnter$, tooltipMouseEnter$);

        // Merge all "leave" events (leaving host or tooltip)
        const anyMouseLeave$ = merge(hostMouseLeave$, tooltipMouseLeave$);

        // When mouse leaves either, start a timer to destroy
        // If mouse enters either again before timer completes, cancel the timer
        return anyMouseLeave$.pipe(
          switchMap(() =>
            timer(200).pipe(
              tap(() => this.destroyTooltip()),
              takeUntil(anyMouseEnter$)
            )
          )
        );
      }),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroyTooltip();
  }

  private initializeTooltip(): void {
    if (this.componentRef === null) {
      const hasTemplate = this.template != null;
      const projectableNodes = this.createProjectableNodes(this.template);
      this.componentRef = this.viewContainerRef.createComponent(TooltipComponent, { projectableNodes });
      this.setTooltipComponentProperties(hasTemplate);
    }
  }

  private setTooltipComponentProperties(hasTemplate: boolean): void {
    if (this.componentRef !== null) {
      const { left, right, top } = this.elementRef.nativeElement.getBoundingClientRect();

      this.componentRef.setInput('left', Math.round((right - left) / 2 + left));
      this.componentRef.setInput('top', Math.round(top - 4));
      this.componentRef.setInput('tooltip', this.tooltip);
      this.componentRef.setInput('hasTemplate', hasTemplate);
    }
  }

  private destroyTooltip(): void {
    if (this.componentRef !== null) {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

  private createProjectableNodes<T = any>(content?: Content<T>): Node[][] {
    if (typeof content === 'string') {
      const element = this.document.createElement('div');
      element.innerHTML = content;
      return [[element]];
    }
    if (content instanceof TemplateRef) {
      const viewRef = content.createEmbeddedView(content.elementRef.nativeElement);
      return [viewRef.rootNodes];
    }
    if (typeof content === 'function') {
      const factory = this.viewContainerRef.createComponent(content);
      return [[factory.location.nativeElement]];
    }

    return [[]];
  }
}
