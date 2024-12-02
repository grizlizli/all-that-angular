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

  readonly user = signal<any>(null);
  readonly cart: any = {
    products: signal<any[]>([]),
    total: computed<number>(() => {
      return this.cart.products()
        .reduce((previousValue: number, currentValue: any) => previousValue + currentValue.price, 0)
    })
  };

  constructor() { }
}
