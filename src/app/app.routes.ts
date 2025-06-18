import { Routes } from '@angular/router';
import { ProductsListPageComponent } from './pages/products-list-page/products-list-page.component';
import { CountriesListPageComponent } from './pages/countries-list-page/countries-list-page.component';
import { PlaygroundPageComponent } from './pages/playground-page/playground-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { productByIdResolver } from './core/resolvers/product-by-id.resolver';

export const routes: Routes = [
    {
        path: 'products',
        loadComponent: () => ProductsListPageComponent
    },
    {
      path: 'products/:id',
      loadComponent: () => ProductDetailsPageComponent,
      resolve: {
        product: productByIdResolver
      }
    },
    {
        path: 'countries',
        loadComponent: () => CountriesListPageComponent
    }, {
      path: 'playground',
      loadComponent: () => PlaygroundPageComponent
     }
];
