import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFiltersComponent } from './dynamic-filters.component';

describe('DynamicFiltersComponent', () => {
  let component: DynamicFiltersComponent;
  let fixture: ComponentFixture<DynamicFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicFiltersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
