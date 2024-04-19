import { Component, inject, signal } from '@angular/core';
import { ProductsFilterComponent } from '../../components/products-filter/products-filter.component';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interface';
import { AsyncPipe } from '@angular/common';
import { debounceTime, map, Observable, Subject, switchMap } from 'rxjs';
import { ProductsQueryParams } from '../../interfaces/products-query-params.interface';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'mk-products-list',
  standalone: true,
  imports: [ProductsFilterComponent, AsyncPipe],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  private readonly productsService: ProductsService = inject(ProductsService);
  readonly productsFilter = signal<Partial<ProductsQueryParams>>({});
  readonly products$: Observable<Product[]> = toObservable(this.productsFilter)
    .pipe(
      debounceTime(1200),
      switchMap(params => this.productsService.getAll(params)),
      map((response) => response.products)
    );

  handleValueChange(value: ProductsQueryParams) {
    this.productsFilter.set(value);
  }
}
