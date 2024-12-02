import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { ProductCardComponent } from '../product-card/product-card.component';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
    selector: 'mk-products-list',
    imports: [ProductCardComponent, MatGridListModule],
    templateUrl: './products-list.component.html',
    styleUrl: './products-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListComponent {
  products = input<Product[] | null>();
}
