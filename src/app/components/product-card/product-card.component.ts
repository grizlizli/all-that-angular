import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'mk-product-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {

  readonly id = input.required<number>();
  readonly title = input.required();
  readonly cetagory = input.required();
  readonly thumbnail = input.required();
  readonly description = input.required();

  readonly like = output<number>();
  readonly share = output<number>();
}
