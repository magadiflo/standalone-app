import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.routes'),
  },
  { path: '**', redirectTo: 'blog', },
];
