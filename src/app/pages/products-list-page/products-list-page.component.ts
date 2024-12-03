import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { ProductsFilterComponent } from '../../components/products-filter/products-filter.component';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interface';
import { debounceTime, map, Observable, switchMap, tap } from 'rxjs';
import { ProductsQueryParams } from '../../interfaces/products-query-params.interface';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { ProductsListComponent } from '../../components/products-list/products-list.component';
import { LoadingProductsListComponent } from '../../components/loading-products-list/loading-products-list.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'mk-products-list-page',
    imports: [MatButtonModule, ProductsFilterComponent, ProductsListComponent, LoadingProductsListComponent],
    templateUrl: './products-list-page.component.html',
    styleUrl: './products-list-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListPageComponent implements OnInit {
  private readonly productsService: ProductsService = inject(ProductsService);
  private readonly destroyRef: DestroyRef = inject(DestroyRef);

  private readonly total = signal<number | null>(null);
  readonly productsFilter = signal<Partial<ProductsQueryParams>>({ skip: 0, limit: 20 });
  readonly products$: Observable<Product[]> = toObservable(this.productsFilter)
    .pipe(
      debounceTime(1200),
      map(value => {
        return Object.fromEntries(Object.entries(value).filter(([_, v]) => v != null));
      }),
      switchMap(params => this.productsService.getAll(params)),
      tap(response => this.total.set(response.total)),
      map((response) => response.products)
    );

  readonly products = signal<Product[] | null>(null);

  ngOnInit(): void {
    this.products$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (products) => this.products.set(products)
      });
  }

  nextPage() {
    const skip = this.productsFilter().skip!;
    const limit = this.productsFilter().limit!;

    this.productsFilter.set({limit, skip: (skip / limit + 1) * limit});
  }
}
