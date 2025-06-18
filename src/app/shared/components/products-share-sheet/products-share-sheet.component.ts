import { Component, Inject, inject, signal } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import { Product } from '../../../core/interfaces/product.interface';

export interface ProductsShareSheetListItem {
  label: string;
  sublabel: string;
}

@Component({
  selector: 'mk-products-share-sheet',
  imports: [MatListModule],
  templateUrl: './products-share-sheet.component.html',
  styleUrl: './products-share-sheet.component.scss'
})
export class ProductsShareSheetComponent {
  private readonly data: {options: ProductsShareSheetListItem[], product: Product} = inject(MAT_BOTTOM_SHEET_DATA)
  private readonly bottomSheetRef = inject<MatBottomSheetRef<ProductsShareSheetComponent>>(MatBottomSheetRef);
  readonly options = signal<ProductsShareSheetListItem[]>(this.data.options || []);
  private readonly value = signal<any>(this.data.product || null);


  openLink(option: ProductsShareSheetListItem) {
    this.bottomSheetRef.dismiss({
      option,
      product: this.value()
    })
  }
}
