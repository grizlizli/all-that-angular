import { isPlatformBrowser } from '@angular/common';
import {
  computed,
  effect,
  inject,
  Injectable,
  PLATFORM_ID,
  signal,
  untracked,
} from '@angular/core';

export interface ShoppingCart {
  products: ShoppingCartProduct[];
  address: ShoppingCartAddress;
}

export interface ShoppingCartProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
  thumbnail: string;
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
    country: null,
  },
};

const SHOPPING_CART_STORAGE_KEY = 'shoppingCart';

export type ShoppingCartAction =
  | null
  | 'ADD_PRODUCT'
  | 'REMOVE_PRODUCT'
  | 'ADD_ADDRESS';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartStore {
  private readonly platformId = inject(PLATFORM_ID);
  // store
  readonly #shoppingCart = signal<ShoppingCart>(
    isPlatformBrowser(this.platformId)
      ? JSON.parse(localStorage.getItem(SHOPPING_CART_STORAGE_KEY) || 'null') ||
          SHOPPING_CART_INITIAL_VALUE
      : SHOPPING_CART_INITIAL_VALUE
  );
  readonly shoppingCart = computed<ShoppingCart & { totalPrice: number }>(
    () => {
      const shoppingCart = this.#shoppingCart();

      return {
        ...shoppingCart,
        totalPrice: this.calculateTotalPrice(shoppingCart.products),
      };
    }
  );

  // 'action' like signal
  readonly action = signal<ShoppingCartAction>(null);

  // 'effect' using effects
  constructor() {
    effect(() => {
      let store: ShoppingCart | null = null;
      untracked(() => {
        store = this.shoppingCart();
      })

      switch (this.action()) {
        case 'ADD_PRODUCT':
          console.log('ADD_PRODUCT', store);
          localStorage.setItem(
            SHOPPING_CART_STORAGE_KEY,
            JSON.stringify(store)
          );
          break;
        case 'REMOVE_PRODUCT':
          console.log('REMOVE_PRODUCT', store);
          localStorage.setItem(
            SHOPPING_CART_STORAGE_KEY,
            JSON.stringify(store)
          );
          break;
        case 'ADD_ADDRESS':
          console.log('ADD_ADDRESS', store);
          localStorage.setItem(
            SHOPPING_CART_STORAGE_KEY,
            JSON.stringify(store)
          );
          break;
        default:
          break;
      }
    });
  }

  // 'selector' likes
  readonly products = computed(() => this.shoppingCart().products);
  readonly address = computed(() => this.shoppingCart().address);
  readonly totalPrice = computed(() => this.shoppingCart().totalPrice);

  // 'reducer' likes
  addProduct(product: ShoppingCartProduct) {
    this.#shoppingCart.update((store: ShoppingCart) => {
      const existingProduct = store.products.find((p) => p.id === product.id);
      let products: ShoppingCartProduct[];

      if (existingProduct) {
        products = store.products.map((p) =>
          p.id === product.id
            ? { ...p, quantity: p.quantity + product.quantity }
            : p
        );
      } else {
        products = [...store.products, product];
      }

      return {
        ...store,
        products,
      };
    });

    this.action.set('ADD_PRODUCT');
  }

  removeProduct(id: number) {
    this.#shoppingCart.update((store: ShoppingCart) => {
      const products = store.products
        .map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0);

      return {
        ...store,
        products,
      };
    });

    this.action.set('REMOVE_PRODUCT');
  }

  addAddress(address: ShoppingCartAddress) {
    this.#shoppingCart.update((store: ShoppingCart) => {
      return {
        ...store,
        address,
      };
    });

    this.action.set('ADD_ADDRESS');
  }

  // helper methods
  private calculateTotalPrice(products: ShoppingCartProduct[]): number {
    return products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
  }
}
