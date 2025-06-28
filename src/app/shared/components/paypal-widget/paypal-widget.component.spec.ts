import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypalWidgetComponent } from './paypal-widget.component';

describe('PaypalWidgetComponent', () => {
  let component: PaypalWidgetComponent;
  let fixture: ComponentFixture<PaypalWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaypalWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaypalWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
