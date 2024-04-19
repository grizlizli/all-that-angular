import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './components/tooltip/tooltip.directive';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { ProductsService } from './services/products.service';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { debounceTime, switchMap } from 'rxjs';
import { Product } from './interfaces/product.interface';
import { ProductsListPageComponent } from './pages/products-list-page/products-list-page.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'mk-root',
  standalone: true,
  imports: [CommonModule, TooltipDirective, TodosListComponent, ProductsListPageComponent, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly title = 'All That Angular';
}
