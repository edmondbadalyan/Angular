import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.routes').then(m => m.routes)
  },
  {
    path: 'demo',
    loadChildren: () => import('./features/demo/demo.routes').then(m => m.routes)
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];
