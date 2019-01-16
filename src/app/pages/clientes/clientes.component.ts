import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';



@Component({
	selector: 'app-clientes',
	templateUrl: './clientes.component.html',
	styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

	Empleados = [
		{ 'name': 'Camilo', apellidos: 'Velasco', porcentaje: 0.5827, activo: true },
		{ 'name': 'Marielas', apellidos: 'Solis', porcentaje: 0.2527, activo: false },
		{ 'name': 'Marisol', apellidos: 'Solis', porcentaje: 0.2527, activo: true },
		{ 'name': 'Iker', apellidos: 'Gossen', porcentaje: 0.927, activo: true }
	];


	model: any = {};
	model2: any = {};
	myValue; //variable Global
	mjs = '';
	mensaje = false;
	mensajes = false;
	ocultarActu: boolean = true;


	constructor() {

	}


	// agregar metos 


	createEmpleado(): void {


		if (this.model == null) {
			alert('No se encontraron datos');
		}
		else {

			this.Empleados.push(this.model);
			console.log(this.model);
			this.mensaje = true;
			this.mjs = 'Cliente creado';
			this.model.name = '';
			this.model.apellidos = '';
		}




	}


	deleEmpleado(i): void {

		var answer = confirm('Desea eliminar');
		if (answer) {
			this.Empleados.splice(i, 1);


			this.mensaje = true;
			this.mjs = 'Borrado';
		}
	}


	editEmpleado(i): void {
		this.ocultarActu = false;
		this.model2.name = this.Empleados[i].name;
		this.model2.apellidos = this.Empleados[i].apellidos;
		this.model2.porcentaje = this.Empleados[i].porcentaje;
		this.myValue = i;
	}


	updateEmpleado(): void {

		this.ocultarActu = true;
		this.mjs = 'actualizado';
		if (this.myValue == null) {

			alert("no puedes estar vacio");
		} else {
			let i = this.myValue;
			for (let j = 0; j < this.Empleados.length; j++) {
				if (i == j) {
					this.Empleados[i] = this.model2;
					// this.msg = 'campo actualizado';
					this.model2 = {};
				}
			}
		}






	}

	ngOnInit() {

		this.Empleados.forEach(function (value) {
			console.log(value);
		});
	}







}
