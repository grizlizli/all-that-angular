import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipComponent } from './tooltip.component';
import { By } from '@angular/platform-browser';

describe('TooltipComponent', () => {
  let component: TooltipComponent;
  let fixture: ComponentFixture<TooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TooltipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the tooltip message', () => {
    component.tooltip = 'Test';
    fixture.detectChanges();

    const tooltipElement = fixture.debugElement.query(By.css('.mk-tooltip')).nativeElement;;
    expect(tooltipElement.innerHTML).toContain('Test');
  });
});
