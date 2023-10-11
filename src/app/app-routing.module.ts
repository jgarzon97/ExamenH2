import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminVehiculosComponent } from './components/admin-vehiculos/admin-vehiculos.component';
import { EditarComponent } from './components/admin-vehiculos/editar/editar.component';
import { IngresarComponent } from './components/admin-vehiculos/ingresar/ingresar.component';
import { InvVehiculosComponent } from './components/inv-vehiculos/inv-vehiculos.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin/vehiculos', component: AdminVehiculosComponent },
  { path: 'admin/vehiculos/:id_vehiculo', component: EditarComponent },
  { path: 'admin/vehiculo/ingresar', component: IngresarComponent },
  { path: 'inv/vehiculos', component: InvVehiculosComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
