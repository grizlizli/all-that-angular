import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicReactiveFormFieldErrorsComponent } from './dynamic-reactive-form-field-errors.component';

describe('DynamicReactiveFormFieldErrorsComponent', () => {
  let component: DynamicReactiveFormFieldErrorsComponent;
  let fixture: ComponentFixture<DynamicReactiveFormFieldErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicReactiveFormFieldErrorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicReactiveFormFieldErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
