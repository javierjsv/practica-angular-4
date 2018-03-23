import { Component, OnInit } from '@angular/core';
import {AppService } from '../../app.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  posts : IPostUsers [];
  ocultarTabla : boolean;
 

  constructor(private appService : AppService) {

  	this.appService.getUser().subscribe(posts=>{
    // este es la variable para el post 
     // this.posts = posts; //MUESTRA ERROR PERO FUNCIONA
      // console.log(posts);
    });

    this.ocultarTabla = false;
	

   }


   ocult(){
   this.ocultarTabla = !this.ocultarTabla;
 }

  ngOnInit() {
  }

}


    interface IPostUsers{
      id : number;
      nombres:string;
      apellidos:string;
      correo:string;
      direcciones:string;
      numeroDocumento: number;
      telefono : number;


 }
