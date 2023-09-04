# [Primeros pasos con componentes Standalone | Nueva forma de enrutamiento en Angular](https://www.youtube.com/watch?v=c5f8Y2fzZM0)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.7.

---

## Creación del proyecto

Crearemos una aplicación basada en el `API Standalone`, sin NgModules. Para eso, al momento de crear la aplicación debemos usar la bandera `--standalone`:

````bash
ng new standalone-app --standalone
````

## Lazy loading and default exports

Cuando se utilizan `loadChildren` y `loadComponent`, el enrutador comprende y desenvuelve automáticamente las llamadas dinámicas de `import()` con exportaciones por `default`. Puede aprovechar esto para omitir `.then()` para operaciones de `lazy loading`.

### Sin el default export

Aquí, **sin el default export** se utiliza el `.then()`

````typescript
// Nuestro routes principal
export const APP_ROUTES: Routes = [
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.routes').then(m => m.BLOG_ROUTES),
  },
  { path: '**', redirectTo: 'blog', },
];

// Nuestro routes de Blog
export const BLOG_ROUTES: Routes = [
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
];
````

### Con el default export

Aquí, **usando el default export** en nuestra routes que es cargada vía `lazy loading` ya no necesitamos usar el `.then()` en el routes principal:

````typescript
// Nuestro routes principal
export const APP_ROUTES: Routes = [
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.routes'), //<-- Note que ya no va el .then()
  },
  { path: '**', redirectTo: 'blog', },
];

// Nuestro routes de Blog
export default [ //<-- Usando el export default
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
````

**NOTA**
> En la página de Angular usan el `Route[]` para definir el arreglo de rutas. En mi caso uso el `Routes`, ya que al momento de crear el proyecto lo crea con ese tipo de dato. Ambos datos son iguales ya que `Routes` es un `type` del tipo `Route[]`:
>
> `export declare type Routes = Route[];`

