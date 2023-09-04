import { Routes } from "@angular/router";

import { LayoutPageComponent } from "./pages/layout-page/layout-page.component";

export default [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./pages/login-page/login-page.component').then(c => c.LoginPageComponent),
      },
      {
        path: 'register',
        loadComponent: () => import('./pages/register-page/register-page.component').then(c => c.RegisterPageComponent),
      },
      { path: '**', redirectTo: 'login', },
    ],
  }
] as Routes;
