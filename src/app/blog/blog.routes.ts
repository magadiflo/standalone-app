import { Routes } from "@angular/router";

import { LayoutPageComponent } from "./pages/layout-page/layout-page.component";

export default [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/home-page/home-page.component').then(c => c.HomePageComponent),
      },
      {
        path: 'docs',
        loadComponent: () => import('./pages/docs-page/docs-page.component').then(c => c.DocsPageComponent),
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/about-page/about-page.component').then(c => c.AboutPageComponent),
      },
      { path: '**', redirectTo: 'home', },
    ]
  }
] as Routes;
