import { ChangeDetectionStrategy, Component, DestroyRef, inject, input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { ProductCardComponent } from '../product-card/product-card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';
import { ProductsShareSheetComponent, ProductsShareSheetListItem } from '../products-share-sheet/products-share-sheet.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

@Component({
  selector: 'mk-products-list',
  standalone: true,
  imports: [ProductCardComponent, MatGridListModule, MatButtonModule, MatBottomSheetModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListComponent {
  private readonly bottomSheet = inject(MatBottomSheet);
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);
  readonly products = input<Product[] | null>();

  shareProduct(id: number) {
    const product = this.products()!.find(product => product.id === id) || null;
    const bottomSheetRef = this.bottomSheet.open(ProductsShareSheetComponent, {
      data: {
        options: [
          { label: 'WhatsApp', sublabel: 'Share on WhatsApp status' },
          { label: 'Facebook', sublabel: 'Share as Facebook post' },
          { label: 'X', sublabel: 'Share on X' }
        ],
        product
      }
    });

    bottomSheetRef.afterDismissed()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((reason) => {
        if (reason) {
          alert(`Share ${reason.product.title} on ${reason.option.label}`);
        }
      });
  }

  openProductPage(id: number) {
    this.router.navigate(['products/', id]);
  }

}
