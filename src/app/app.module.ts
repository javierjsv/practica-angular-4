import { BrowserModule } from '@angular/platform-browser';

// BrowserAnimationsModule Angular Material
// npm install --save @angular/material @angular/cdk @angular/animations

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { HobiesComponent } from './pages/hobies/hobies.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';


// importar para utilizar las routes se puede crear directiva aparte
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { InicioDirective } from './pages/inicio/inicio.directive';
import { JsonService } from './service/json.service';
// rutas de la alicaciones hacer constant

export const appRoutes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'home', component: AppComponent },
  { path: 'Hobies', component: HobiesComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'cliente', component: ClientesComponent }


];



@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    HobiesComponent,
    UsuariosComponent,
    InicioComponent,
    InicioDirective

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // BrowserAnimationsModule Angular Material
    MatCardModule, // se debe importar el api (ejemplo https://material.angular.io/components/card/api)
    MatButtonModule, // se debe importar el api (ejemplo https://material.angular.io/components/card/api)
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes) // sebe por para las routes

  ],
  providers: [
    AppService,
    JsonService

  ],


  bootstrap: [AppComponent]
})
export class AppModule { }

