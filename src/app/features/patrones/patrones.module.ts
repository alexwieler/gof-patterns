import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatronesRoutingModule } from './patrones-routing.module';
import { ListaPatronesComponent } from './components/lista-patrones/lista-patrones.component';
import { PatronCardComponent } from '../../shared/components/patron-card/patron-card.component';

@NgModule({
  declarations: [
    ListaPatronesComponent,
    PatronCardComponent
  ],
  imports: [
    CommonModule,
    PatronesRoutingModule
  ]
})
export class PatronesModule { }