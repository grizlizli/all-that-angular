import { ChangeDetectionStrategy, Component, computed, inject, linkedSignal, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ResponsiveService } from './services/responsive.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingCartStore } from './store/shopping-cart.store';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'mk-root',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
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

  readonly sideNavOpened = signal<boolean>(true);

  removeProduct(id: number) {
    this.shoppingCartStore.removeProduct(id);
  }

  toggleSideNavMode() {
    this.sideNavOpened.update(opened => !opened);
  }
}
