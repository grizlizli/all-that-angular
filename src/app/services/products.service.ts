import { inject, Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { ListResponse } from '../interfaces/list-response.interface';
import { Product } from '../interfaces/product.interface';
import { ProductsQueryParams } from '../interfaces/products-query-params.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly api: ApiService = inject(ApiService);

  getAll(params: Partial<ProductsQueryParams> = {}): Observable<ListResponse & { products: Product[]}> {
    return this.api.get('products', params);
  }
}
