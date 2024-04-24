import { ApplicationRef, ComponentRef, DestroyRef, Directive, ElementRef, HostListener, inject, Inject, Injector, Input, OnDestroy, OnInit, TemplateRef, Type, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, Observable, Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { TooltipComponent } from './tooltip.component';
import { DOCUMENT } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export type Content<T> = string | TemplateRef<T> | Type<T>;

@Directive({
  selector: '[mkTooltip]',
  standalone: true
})
export class TooltipDirective implements OnInit, OnDestroy {
  @Input({alias: 'mkTooltip', required: true}) tooltip: string = '';
  @Input() template?: Content<any>;

  private readonly elementRef: ElementRef = inject(ElementRef);
  private readonly appRef: ApplicationRef = inject(ApplicationRef);
  private readonly viewContainerRef: ViewContainerRef = inject(ViewContainerRef);
  private readonly injector: Injector = inject(Injector);
  private readonly document: Document = inject(DOCUMENT);
  private readonly destroyRef: DestroyRef = inject(DestroyRef);

  private readonly displaySubject = new BehaviorSubject<boolean>(false);
  private readonly display$: Observable<boolean> = this.displaySubject;

  private componentRef: ComponentRef<TooltipComponent> | null = null;

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
        distinctUntilChanged(),
        takeUntilDestroyed(this.destroyRef)
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
  }

  private initializeTooltip(): void {
    if (this.componentRef === null) {
      const hasTemplate = this.template != null;
      const projectableNodes = this.createProjectableNodes(this.template);
      this.componentRef = this.viewContainerRef.createComponent(TooltipComponent, { injector: this.injector, projectableNodes });
      this.setTooltipComponentProperties(hasTemplate); 
    }
  }

  private setTooltipComponentProperties(hasTemplate: boolean): void {
    if (this.componentRef !== null) {
      const { left, right, top } = this.elementRef.nativeElement.getBoundingClientRect();

      this.componentRef.setInput('left', Math.round((right - left) / 2 + left));
      this.componentRef.setInput('top', Math.round(top - 4));
      this.componentRef.setInput('tooltip', this.tooltip);
      this.componentRef.setInput('displaySubject', this.displaySubject);
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
    
    return [[]]
  }
}

