import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { ProductsFilterComponent } from '../../components/products-filter/products-filter.component';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interface';
import { debounceTime, map, Observable, switchMap } from 'rxjs';
import { ProductsQueryParams } from '../../interfaces/products-query-params.interface';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { ProductsListComponent } from '../../components/products-list/products-list.component';
import { LoadingProductsListComponent } from '../../components/loading-products-list/loading-products-list.component';

@Component({
  selector: 'mk-products-list-page',
  standalone: true,
  imports: [ProductsFilterComponent, ProductsListComponent, LoadingProductsListComponent],
  templateUrl: './products-list-page.component.html',
  styleUrl: './products-list-page.component.scss'
})
export class ProductsListPageComponent implements OnInit {
  private readonly productsService: ProductsService = inject(ProductsService);
  private readonly destroyRef: DestroyRef = inject(DestroyRef);
  readonly productsFilter = signal<Partial<ProductsQueryParams>>({skip: 0, limit: 20});
  readonly products$: Observable<Product[]> = toObservable(this.productsFilter)
    .pipe(
      debounceTime(1200),
      switchMap(params => this.productsService.getAll(params)),
      map((response) => response.products)
    );

  products: Product[] | null = null;

  ngOnInit(): void {
    this.products$
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe({
      next: (products) => this.products = products
    })
  }

  handleFilterValueChange(value: ProductsQueryParams) {
    this.productsFilter.set(value);
  }
}
