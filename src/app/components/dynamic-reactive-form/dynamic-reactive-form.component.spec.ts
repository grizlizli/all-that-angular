import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicReactiveFormComponent } from './dynamic-reactive-form.component';

describe('DynamicReactiveFormComponent', () => {
  let component: DynamicReactiveFormComponent;
  let fixture: ComponentFixture<DynamicReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicReactiveFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
