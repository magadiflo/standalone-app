import { Routes } from "@angular/router";

import { LayoutPageComponent } from "./pages/layout-page/layout-page.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { DocsPageComponent } from "./pages/docs-page/docs-page.component";
import { AboutPageComponent } from "./pages/about-page/about-page.component";

export default [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'home', component: HomePageComponent, },
      { path: 'docs', component: DocsPageComponent, },
      { path: 'about', component: AboutPageComponent, },
      { path: '**', redirectTo: 'home', },
    ]
  }
] as Routes;
