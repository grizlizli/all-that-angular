import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mk-loading-products-list',
  standalone: true,
  imports: [],
  templateUrl: './loading-products-list.component.html',
  styleUrl: './loading-products-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingProductsListComponent {
  readonly items = new Array<void>(20)
}
