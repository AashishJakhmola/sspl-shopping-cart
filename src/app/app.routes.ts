import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'product-list',
    loadComponent: () =>
      import('./features/products/product-list/product-list')
        .then(m => m.ProductList),
  },
  {
    path: '',
    redirectTo: 'product-list',
    pathMatch: 'full',
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./features/cart/cart/cart')
        .then(m => m.Cart),
  },
];

