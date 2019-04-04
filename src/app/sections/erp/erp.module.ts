import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErpRoutingModule } from './erp-routing.module';

import { VentasComponent } from './ventas/ventas.component';
import { ErpComponent } from './erp.component';


@NgModule({
  declarations: [VentasComponent, ErpComponent],
  imports: [
    CommonModule,
    ErpRoutingModule
  ]
})
export class ErpModule { }
