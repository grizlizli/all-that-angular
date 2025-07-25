import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicListComponent } from './dynamic-list.component';

describe('DynamicListComponent', () => {
  let component: DynamicListComponent;
  let fixture: ComponentFixture<DynamicListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
