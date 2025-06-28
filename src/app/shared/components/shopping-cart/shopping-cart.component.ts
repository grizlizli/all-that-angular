import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { CurrencyPipe } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { ShoppingCartProduct } from '../../../store/shopping-cart.store';

@Component({
  selector: 'mk-shopping-cart',
  imports: [MatListModule, MatIconModule, CurrencyPipe],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartComponent {
  readonly products = input.required<ShoppingCartProduct[]>();
  readonly total = input(0);

  readonly removeProduct = output<number>()
}
