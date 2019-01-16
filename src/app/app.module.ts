import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { HobiesComponent } from './pages/hobies/hobies.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';


// importar para utilizar las routes 
import { RouterModule, Routes} from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { InicioDirective } from './pages/inicio/inicio.directive';
// rutas de la alicaciones hacer constant

export const appRoutes : Routes =[
  { path: '', component : InicioComponent  },
  { path: 'inicio', component : InicioComponent },
  { path: 'home',component: AppComponent},
  { path: 'Hobies', component : HobiesComponent },
  { path: 'usuarios', component : UsuariosComponent },
  { path: 'cliente', component : ClientesComponent }


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
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes) //sebe por para las routes

  


  ],
  providers: [
  AppService

  ],
  

  bootstrap: [AppComponent]
})
export class AppModule { }

