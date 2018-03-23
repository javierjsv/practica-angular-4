import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-hobies',
  templateUrl: './hobies.component.html',
  styleUrls: ['./hobies.component.css']
})
export class HobiesComponent implements OnInit {
	mostrar : boolean;
	hobby : string [];

  constructor() {

  	this.mostrar = false;
	this.hobby = ['correr' , 'leer','cantar'];

   }




 ocular(){

 		this.mostrar = !this.mostrar;

 }


 formulary(datos){

      	console.log(datos.value);
      	

        if (datos.value == '') {

          alert("no puede estar vacio");
          datos.valu = !null;

        }else{
            this.hobby.push(datos.value);
            datos.value = '';
          return false;
        }
          
          

      }


  ngOnInit() {
  }

}
