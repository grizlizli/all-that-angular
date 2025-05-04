import { CurrencyPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Product } from '../../interfaces/product.interface';
import { MatButtonModule } from '@angular/material/button';
import { ShoppingCartStore } from '../../store/shopping-cart.store';

@Component({
  selector: 'mk-product-details-page',
  imports: [MatGridListModule, MatButtonModule, CurrencyPipe],
  templateUrl: './product-details-page.component.html',
  styleUrl: './product-details-page.component.scss'
})
export class ProductDetailsPageComponent {
  readonly #shoppingCartStore = inject(ShoppingCartStore);

  readonly product = input.required<Product>();

  addToCart(product: Product) {
    this.#shoppingCartStore.addProduct({id: product.id, name: product.title, price: product.price, quantity: 1, thumbnail: product.thumbnail});
  }
}
