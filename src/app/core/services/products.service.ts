import { inject, Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { ListResponse } from '../../core/interfaces/list-response.interface';
import { Product } from '../../core/interfaces/product.interface';
import { ProductsQueryParams } from '../../core/interfaces/products-query-params.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly api: ApiService = inject(ApiService);

  getAll(params: Partial<ProductsQueryParams> = {}): Observable<ListResponse & { products: Product[]}> {
    return this.api.get('products', params);
  }

  getById(id: string) {
    return this.api.get(`products/${id}`) as Observable<Product>;
  }
}
