import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallePatronRoutingModule } from './detalle-patron-routing.module';
import { DetallePatronComponent } from './components/detalle-patron/detalle-patron.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DetallePatronRoutingModule,
    DetallePatronComponent
  ]
})
export class DetallePatronModule { }
