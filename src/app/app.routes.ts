import { Routes } from '@angular/router';
import { ProductsListComponent } from './pages/products-list/products-list.component';

export const routes: Routes = [
    {
        path: 'products',
        loadComponent: () => ProductsListComponent
    }
];
