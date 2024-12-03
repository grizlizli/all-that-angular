import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ResponsiveService } from './services/responsive.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { AppStore } from './store/app.store';

@Component({
    selector: 'mk-root',
    standalone: true,
    imports: [MatSidenavModule, MatToolbarModule,RouterLink, RouterOutlet, ShoppingCartComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly title = 'All That Angular';
  private readonly responsiveService = inject(ResponsiveService);
  private readonly appStore = inject(AppStore);

  readonly shoopingCartProducts = this.appStore.products;
  readonly total = this.appStore.total;

  readonly menuSidenavMode  = computed(() => {
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


}
