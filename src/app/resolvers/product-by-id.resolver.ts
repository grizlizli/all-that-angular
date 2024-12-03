import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Product } from '../interfaces/product.interface';
import { Observable } from 'rxjs';

export const productByIdResolver: ResolveFn<Observable<Product>> = (route, state) => {
  const productsService = inject(ProductsService);
  return productsService.getById(`${route.paramMap.get('id')}`);
};
