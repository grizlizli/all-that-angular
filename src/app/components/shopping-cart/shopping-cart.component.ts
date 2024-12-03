import { Component, input } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { Product } from '../../interfaces/product.interface';
import { CurrencyPipe } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'mk-shopping-cart',
  imports: [MatListModule, MatIconModule, CurrencyPipe],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {
  readonly products = input.required<Product[]>();
  readonly total = input(0);

  removeProduct() {

  }
}
