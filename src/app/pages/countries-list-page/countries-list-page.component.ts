import { AsyncPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_COUNTRIES } from '../../graphql.operations';
import { catchError, map } from 'rxjs';

@Component({
    selector: 'mk-countries-list-page',
    imports: [AsyncPipe],
    templateUrl: './countries-list-page.component.html',
    styleUrl: './countries-list-page.component.scss'
})
export class CountriesListPageComponent {
  private readonly apollo = inject(Apollo);
  readonly error = signal<string | null>(null)

  readonly countries$ = this.apollo.watchQuery<any[]>({
    query: GET_COUNTRIES
  })
    .valueChanges
    .pipe(
      map(({ data, error }) => {
        // @ts-ignore
        return data['countries'] as any[];
      }),
      catchError((error) => {
        this.error.set('Server error.');
        return [];
      })
    );
}
