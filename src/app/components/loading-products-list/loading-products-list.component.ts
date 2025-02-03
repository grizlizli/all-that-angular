import { ChangeDetectionStrategy, Component, computed, effect, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
    selector: 'mk-loading-products-list',
    imports: [MatCardModule, MatButtonModule, MatGridListModule],
    templateUrl: './loading-products-list.component.html',
    styleUrl: './loading-products-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingProductsListComponent {
  readonly count = input<number>(20);
  readonly items = computed(() => new Array<void>(this.count()));
}
