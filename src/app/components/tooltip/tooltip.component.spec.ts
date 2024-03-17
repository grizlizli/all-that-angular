import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipComponent } from './tooltip.component';
import { By } from '@angular/platform-browser';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mk-test-tooltip-wrapper',
  template: '<mk-tooltip [tooltip]="tooltip" [left]="left" [top]="top"></mk-tooltip>',
  standalone: true,
  imports: [TooltipComponent],
})
class TestTooltipWrapperComponent {
  tooltip: string = '';
  top: number = 0;
  left: number = 0;
}

describe('TooltipComponent', () => {
  let component: TestTooltipWrapperComponent;
  let fixture: ComponentFixture<TestTooltipWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestTooltipWrapperComponent, TooltipComponent]
    })
    .overrideComponent(TooltipComponent, {
      set: {
          changeDetection: ChangeDetectionStrategy.Default
      }
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestTooltipWrapperComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the tooltip message with left 100px, top 100px', () => {
    component.tooltip = 'Test';
    component.top = 100;
    component.left = 100;
    fixture.detectChanges();

    const tooltipElement: any = fixture.debugElement.query(By.css('.mk-tooltip'));

    expect(tooltipElement.nativeElement.innerText).toContain('Test');
    expect(tooltipElement.nativeElement.style.left).toBe('100px');
    expect(tooltipElement.nativeElement.style.top).toBe('100px');
  });
});
