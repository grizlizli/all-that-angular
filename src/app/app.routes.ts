import { Routes } from '@angular/router';
import { ProductsListPageComponent } from './pages/products-list-page/products-list-page.component';

export const routes: Routes = [
    {
        path: 'products',
        loadComponent: () => ProductsListPageComponent
    }
];
