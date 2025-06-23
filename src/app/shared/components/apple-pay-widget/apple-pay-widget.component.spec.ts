import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplePayWidgetComponent } from './apple-pay-widget.component';

describe('ApplePayWidgetComponent', () => {
  let component: ApplePayWidgetComponent;
  let fixture: ComponentFixture<ApplePayWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplePayWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplePayWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
