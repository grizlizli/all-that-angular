import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicListItemComponent } from './dynamic-list-item.component';

describe('DynamicListItemComponent', () => {
  let component: DynamicListItemComponent;
  let fixture: ComponentFixture<DynamicListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
