import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
 



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  // se puede inyectar el servcio directamete en la app.modules o qui
  // providers: [AppService]
})
export class AppComponent {

  // se debe declarar la varieble con :  ejemplo  nume1 : number;


  title = 'Bienvenido a la aplicación ';



constructor(){
 // decalarar las variable this.nume1;

}






}
