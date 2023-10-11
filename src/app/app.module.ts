import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { LoginComponent } from './components/login/login.component';
import { AdminVehiculosComponent } from './components/admin-vehiculos/admin-vehiculos.component';
import { InvVehiculosComponent } from './components/inv-vehiculos/inv-vehiculos.component';
import { IngresarComponent } from './components/admin-vehiculos/ingresar/ingresar.component';
import { EditarComponent } from './components/admin-vehiculos/editar/editar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminVehiculosComponent,
    InvVehiculosComponent,
    IngresarComponent,
    EditarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
