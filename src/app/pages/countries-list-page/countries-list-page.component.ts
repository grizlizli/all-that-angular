import { AsyncPipe } from '@angular/common';
import { Component, signal } from '@angular/core';


@Component({
    selector: 'mk-countries-list-page',
    imports: [AsyncPipe],
    templateUrl: './countries-list-page.component.html',
    styleUrl: './countries-list-page.component.scss'
})
export class CountriesListPageComponent {
  readonly error = signal<string | null>(null)
}
