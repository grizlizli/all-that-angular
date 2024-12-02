import { Routes } from '@angular/router';
import { ProductsListPageComponent } from './pages/products-list-page/products-list-page.component';
import { CountriesListPageComponent } from './pages/countries-list-page/countries-list-page.component';
import { PlaygroundPageComponent } from './pages/playground-page/playground-page.component';

export const routes: Routes = [
    {
        path: 'products',
        loadComponent: () => ProductsListPageComponent
    },
    {
        path: 'countries',
        loadComponent: () => CountriesListPageComponent
    }, {
      path: 'playground',
      loadComponent: () => PlaygroundPageComponent
     }
];
