import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallePatronComponent } from './components/detalle-patron/detalle-patron.component';

const routes: Routes = [
  {
    path: '',
    component: DetallePatronComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetallePatronRoutingModule {}