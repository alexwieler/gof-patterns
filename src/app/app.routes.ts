import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/landing/landing.module').then(m => m.LandingModule),
  },
  {
    path: 'patrones',
    loadChildren: () => import('./features/patrones/patrones.module').then(m => m.PatronesModule),
  },
  {
    path: 'patron/:id',
    loadChildren: () => import('./features/detalle-patron/detalle-patron.module').then(m => m.DetallePatronModule),
  },
  {
    path: 'ejercicio/:id',
    loadChildren: () => import('./features/ejercicio/ejercicio.module').then(m => m.EjercicioModule),
  }
];