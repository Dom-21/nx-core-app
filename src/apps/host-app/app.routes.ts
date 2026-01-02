import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./main-page/main-page').then((m) => m.MainPage),
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () => import('./page-body/page-body').then((m) => m.PageBody),
      },
      {
        path: 'student',
        loadChildren: () =>
          import('./../student/src/app/app.routes').then((m) => m.appRoutes),
      },
    ],
  },
];
