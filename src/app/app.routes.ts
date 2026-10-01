import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'detail',
        loadComponent: () =>
          import('./pages/detail/detail.component').then((m) => m.DetailComponent),
      },
      {
        path: 'category',
        loadComponent: () =>
          import('./pages/category/category.component').then((m) => m.CategoryComponent),
      },
      {
        path: 'checkout',
        loadComponent: () =>
          import('./pages/checkout/checkout.component').then((m) => m.CheckoutComponent),
      },
      {
        path: 'cart',
        loadComponent: () => import('./pages/cart/cart.component').then((m) => m.CartComponent),
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.component').then((m) => m.RegisterComponent),
  },

  //   {
  //     path: '',
  //     loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
  //   },
];
