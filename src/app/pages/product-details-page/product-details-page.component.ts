import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Product } from '../../interfaces/product.interface';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'mk-product-details-page',
  imports: [MatGridListModule, MatButtonModule, CurrencyPipe],
  templateUrl: './product-details-page.component.html',
  styleUrl: './product-details-page.component.scss'
})
export class ProductDetailsPageComponent {

  readonly product = input<Product>();

  addToCart() {
  }
}
