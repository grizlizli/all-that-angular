import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interface';
import { debounceTime, map, Observable, switchMap, tap } from 'rxjs';
import { ProductsQueryParams } from '../../interfaces/products-query-params.interface';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { ProductsListComponent } from '../../components/products-list/products-list.component';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
    selector: 'mk-products-list-page',
    imports: [MatButtonModule, MatProgressSpinnerModule, ProductsListComponent],
    templateUrl: './products-list-page.component.html',
    styleUrl: './products-list-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListPageComponent implements OnInit {
  private readonly productsService: ProductsService = inject(ProductsService);
  private readonly destroyRef: DestroyRef = inject(DestroyRef);

  private readonly total = signal<number | null>(null);
  readonly loading = signal<boolean>(true);
  readonly productsFilter = signal<Partial<ProductsQueryParams>>({ skip: 0, limit: 20 });
  readonly products$: Observable<Product[]> = toObservable(this.productsFilter)
    .pipe(
      tap(() => this.loading.set(true)),
      debounceTime(1200),
      map(value => {
        return Object.fromEntries(Object.entries(value).filter(([_, v]) => v != null));
      }),
      switchMap(params => this.productsService.getAll(params)),
      tap((response) => this.total.set(response.total)),
      map((response) => response.products),
      tap(() => this.loading.set(false)),
    );

  readonly products = signal<Product[] | null>(null);

  readonly disableNextButton = computed(() => {
    const skip = this.productsFilter().skip!;
    const limit = this.productsFilter().limit!;
    const total = this.total();

    if (total) {
      return skip + limit >= total;
    }
    else {
      return false;
    }
  });

  readonly disablePreviousButton = computed(() => {
    const skip = this.productsFilter().skip!;

    return skip <= 0;
  });

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

  previousPage() {
    const skip = this.productsFilter().skip!;
    const limit = this.productsFilter().limit!;

    this.productsFilter.set({limit, skip: (skip / limit - 1) * limit});
  }
}
