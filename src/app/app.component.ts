import { ChangeDetectionStrategy, Component, computed, inject, inputBinding, linkedSignal, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ResponsiveService } from './core/services/responsive.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ShoppingCartComponent } from './shared/components/shopping-cart/shopping-cart.component';
import { ShoppingCartStore } from './store/shopping-cart.store';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { AllThatDynamicComponent, DynamicElement } from './shared/components/all-that-dynamic/all-that-dynamic.component';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { TooltipDirective } from './shared/components/tooltip/tooltip.directive';

@Component({
  selector: 'mk-root',
  standalone: true,
  imports: [
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    RouterLink,
    RouterOutlet,
    ShoppingCartComponent,
    AllThatDynamicComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly title = 'All That Angular';
  private readonly responsiveService = inject(ResponsiveService);
  private readonly shoppingCartStore = inject(ShoppingCartStore);

  readonly value = signal('Hello, World!');

  readonly dynamicElement: DynamicElement = {
    type: ProductCardComponent,
    directives: [
      TooltipDirective
    ],
    bindings: [
      inputBinding('id', () => 123),
      inputBinding('title', this.value),
      inputBinding('category', () => 'category'),
      inputBinding('thumbnail', () => 'thumbnail'),
      inputBinding('description', () => 'description'),
      inputBinding('mkTooltip', () => 'hello, world!')
    ],

  }


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
