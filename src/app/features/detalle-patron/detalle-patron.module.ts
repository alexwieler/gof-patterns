import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallePatronRoutingModule } from './detalle-patron-routing.module';
import { DetallePatronComponent } from './components/detalle-patron/detalle-patron.component';
import { UmlWorkspaceComponent } from '../../shared/components/uml-workspace/uml-workspace.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DetallePatronRoutingModule,
    DetallePatronComponent, 
    UmlWorkspaceComponent
  ]
})
export class DetallePatronModule { }
