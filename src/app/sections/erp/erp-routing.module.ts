import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErpComponent } from './erp.component';
import { VentasComponent } from './ventas/ventas.component';



const routes: Routes = [
    {
        path: 'erp',
        component: ErpComponent,
        children: [
            {
                path: 'ventas',
                component: VentasComponent
            },
        ]
    },
    { path: '', redirectTo: 'erp', pathMatch: 'full' },
    { path: '**', component: ErpComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErpRoutingModule { }