import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// observables
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';




@Injectable()
export class AppService {

  constructor(private http: HttpClient) {

  	console.log("constructor funcionanando ");
   }


 	// utilizando { http } from '@angular/core';

/* 	
   getUser(){
   	return this.http.get('https://jsonplaceholder.typicode.com/posts').map(res=>{
   		res.json();
   	})
   }
*/


getUser(){

	return this.http.get('http://localhost:8080/Consulta_de_procesos/api/usuarios');

}






}
