import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetAComponent } from './widget-a.component';

describe('WidgetAComponent', () => {
  let component: WidgetAComponent;
  let fixture: ComponentFixture<WidgetAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
