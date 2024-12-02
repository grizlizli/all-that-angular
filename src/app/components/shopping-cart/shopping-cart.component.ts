import { Component, input, signal } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'mk-shopping-cart',
  imports: [MatListModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {
  readonly products = input.required<Product[]>();
}
