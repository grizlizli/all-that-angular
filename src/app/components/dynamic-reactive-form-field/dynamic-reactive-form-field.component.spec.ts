import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicReactiveFormFieldComponent } from './dynamic-reactive-form-field.component';

describe('DynamicReactiveFormFieldComponent', () => {
  let component: DynamicReactiveFormFieldComponent;
  let fixture: ComponentFixture<DynamicReactiveFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicReactiveFormFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicReactiveFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
