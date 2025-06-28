import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingProductsListComponent } from './loading-products-list.component';

describe('LoadingProductsListComponent', () => {
  let component: LoadingProductsListComponent;
  let fixture: ComponentFixture<LoadingProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingProductsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadingProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
