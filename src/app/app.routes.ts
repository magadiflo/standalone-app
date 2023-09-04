import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes'),
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.routes'),
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full', },
  { path: '**', redirectTo: 'blog', },
];
