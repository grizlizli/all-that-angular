import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllThatDynamicComponent } from './all-that-dynamic.component';

describe('AllThatDynamicComponent', () => {
  let component: AllThatDynamicComponent;
  let fixture: ComponentFixture<AllThatDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllThatDynamicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllThatDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
