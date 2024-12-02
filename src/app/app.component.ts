import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ResponsiveService } from './services/responsive.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

@Component({
    selector: 'mk-root',
    standalone: true,
    imports: [RouterLink, RouterOutlet, MatSidenavModule, ShoppingCartComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly title = 'All That Angular';
  private readonly responsiveService = inject(ResponsiveService);

  readonly menuSidenavMode  = computed(() => {
    if (this.responsiveService.largeWidth()) {
      return 'side';
    }

    return 'over';
  })
}
