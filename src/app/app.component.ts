import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ResponsiveService } from './services/responsive.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingCartStore } from './store/shopping-cart.store';

@Component({
  selector: 'mk-root',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    RouterLink,
    RouterOutlet,
    ShoppingCartComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly title = 'All That Angular';
  private readonly responsiveService = inject(ResponsiveService);
  private readonly shoppingCartStore = inject(ShoppingCartStore);

  readonly shoppingCart = this.shoppingCartStore.shoppingCart;

  readonly menuSidenavMode = computed(() => {
    if (this.responsiveService.largeWidth()) {
      return 'side';
    }

    return 'over';
  });

  readonly shoppingCartSidenavMode = computed(() => {
    if (this.responsiveService.mediumWidth()) {
      return 'side';
    }

    return 'over';
  });

  addToCart(id = '1') {
    this.shoppingCartStore.addProduct({
      id,
      name: 'Carape',
      price: 99.99,
      quantity: 2,
    });
  }

  removeProduct(id: string) {
    this.shoppingCartStore.removeProduct(id);
  }
}
