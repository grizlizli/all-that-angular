import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicListItemExample1Component } from './dynamic-list-item-example1.component';

describe('DynamicListItemExample1Component', () => {
  let component: DynamicListItemExample1Component;
  let fixture: ComponentFixture<DynamicListItemExample1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicListItemExample1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicListItemExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
