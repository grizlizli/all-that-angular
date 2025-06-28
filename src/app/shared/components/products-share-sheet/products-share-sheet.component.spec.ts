import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsShareSheetComponent } from './products-share-sheet.component';

describe('ProductsShareSheetComponent', () => {
  let component: ProductsShareSheetComponent;
  let fixture: ComponentFixture<ProductsShareSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsShareSheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsShareSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
