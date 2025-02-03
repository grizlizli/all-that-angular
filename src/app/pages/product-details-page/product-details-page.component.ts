import { CurrencyPipe, JsonPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Product } from '../../interfaces/product.interface';
import { AppStore } from '../../store/app.store';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'mk-product-details-page',
  imports: [MatGridListModule, MatButtonModule, CurrencyPipe],
  templateUrl: './product-details-page.component.html',
  styleUrl: './product-details-page.component.scss'
})
export class ProductDetailsPageComponent {
  private readonly appStore = inject(AppStore);

  readonly product = input<Product>();

  addToCart() {
    this.appStore.addToCart(this.product());
  }
}
