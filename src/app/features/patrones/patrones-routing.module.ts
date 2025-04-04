import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPatronesComponent } from './components/lista-patrones/lista-patrones.component';

const routes: Routes = [
  {
    path: '',
    component: ListaPatronesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatronesRoutingModule { }