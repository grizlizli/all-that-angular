import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStore {

  readonly store = signal<any>({
    user: null,
    cart: {
      products: [],
      total: 0
    }
  });

  readonly products = computed(() => this.store().cart.products);
  readonly total = computed(() => this.products()
    .reduce((prevValue: number, currentValue: any) => prevValue + currentValue.price, 0)
  );

  addToCart(product: any) {
    this.store.update((value) => {
      return {
        ...value,
        cart: {
          ...value.cart,
          products: [...value.cart.products, product]
        }
      };
    });
  }
}
