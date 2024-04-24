import { ChangeDetectionStrategy, Component, computed, effect, input } from '@angular/core';

@Component({
  selector: 'mk-loading-products-list',
  standalone: true,
  imports: [],
  templateUrl: './loading-products-list.component.html',
  styleUrl: './loading-products-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingProductsListComponent {
  readonly count = input<number>(20);
  readonly items = computed(() => new Array<void>(this.count()));
}
