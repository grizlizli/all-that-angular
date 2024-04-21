import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { LoadingProductsListComponent } from '../loading-products-list/loading-products-list.component';

@Component({
  selector: 'mk-products-list',
  standalone: true,
  imports: [LoadingProductsListComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListComponent {
  products = input<Product[] | null>();
}
