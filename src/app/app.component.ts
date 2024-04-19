import { Component, inject, input, model, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './components/tooltip/tooltip.directive';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { ProductsService } from './services/products.service';
import { ProductsFilterComponent } from './components/products-filter/products-filter.component';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { debounceTime, switchMap, tap } from 'rxjs';
import { Product } from './interfaces/product.interface';
import { ListResponse } from './interfaces/list-response.interface';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'mk-root',
  standalone: true,
  imports: [CommonModule, TooltipDirective, TodosListComponent, ProductsListComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly productsService = inject(ProductsService);
  readonly title = 'All That Angular';

  readonly products = signal<Product[]>([]);
  readonly value = signal<{ skip: number, limit: number }>({ skip: 20, limit: 20 });
  readonly value$ = toObservable(this.value).pipe(
    debounceTime(700),
    takeUntilDestroyed()
  );

  ngOnInit(): void {
    this.value$
      .pipe(
        switchMap((params) => this.productsService.getAll(params))
      )
      .subscribe({
        next: (response) => {
          this.products.set(response.products);
        }
      });
  }

  handleValueChange(value: any) {
    this.value.set(value);
  }
}
