import { TestBed } from '@angular/core/testing';

import { ShoppingCartStore } from './shopping-cart.store';

describe('ShoppingCartStore', () => {
  let service: ShoppingCartStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingCartStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
