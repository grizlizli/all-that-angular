import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetBComponent } from './widget-b.component';

describe('WidgetBComponent', () => {
  let component: WidgetBComponent;
  let fixture: ComponentFixture<WidgetBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
