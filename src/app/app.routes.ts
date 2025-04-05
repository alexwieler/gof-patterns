import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'patrones',
    loadChildren: () => import('./features/patrones/patrones.module').then(m => m.PatronesModule),
  },
  {
    path: 'patron/:id',
    loadChildren: () => import('./features/detalle-patron/detalle-patron.module').then(m => m.DetallePatronModule),
  }
];