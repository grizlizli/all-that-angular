import { computed, Injectable, signal } from '@angular/core';

export interface ShoppingCart {
  products: ShoppingCartProduct[];
  address: ShoppingCartAddress
}

export interface ShoppingCartProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface ShoppingCartAddress {
  street: string | null;
  city: string | null;
  country: string | null;
}

const SHOPPING_CART_INITIAL_VALUE: ShoppingCart = {
  products: [],
  address: {
    street: null,
    city: null,
    country: null
  }
}

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartStore {
  // store
  readonly #shoppingCart = signal<ShoppingCart>(SHOPPING_CART_INITIAL_VALUE);
  readonly shoppingCart = computed<ShoppingCart & { totalPrice: number}>(() => {
    const shoppingCart = this.#shoppingCart();

    return {
      ...shoppingCart,
      totalPrice: this.calculateTotalPrice(shoppingCart.products)
    };
  });

  // 'selector' likes
  readonly products = computed(() => this.shoppingCart().products);
  readonly address = computed(() => this.shoppingCart().address);
  readonly totalPrice = computed(() => this.shoppingCart().totalPrice);

  // 'reducer' likes
  addProduct(product: ShoppingCartProduct) {
    this.#shoppingCart.update((store: ShoppingCart) => {
      const existingProduct = store.products.find(p => p.id === product.id);
      let products: ShoppingCartProduct[];

      if (existingProduct) {
        products = store.products.map(p =>
          p.id === product.id
            ? { ...p, quantity: p.quantity + product.quantity }
            : p
        );
      } else {
        products = [...store.products, product];
      }

      return {
        ...store,
        products
      };
    });
  }

  removeProduct(id: string) {
    this.#shoppingCart.update((store: ShoppingCart) => {
      const products = store.products
        .map(product =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter(product => product.quantity > 0);

      return {
        ...store,
        products
      };
    });
  }

  addAddress(address: ShoppingCartAddress) {
    this.#shoppingCart.update((store: ShoppingCart) => {
      return {
        ...store,
        address
      };
    });
  }

  // other
  private calculateTotalPrice(products: ShoppingCartProduct[]): number {
    return products.reduce((acc, product) => acc + product.price * product.quantity, 0);
  }
}
