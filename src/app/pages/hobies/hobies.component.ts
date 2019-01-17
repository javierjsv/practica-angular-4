import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgModel } from '@angular/forms';
import { JsonService } from '../../service/json.service';


@Component({
  selector: 'app-hobies',
  templateUrl: './hobies.component.html',
  styleUrls: ['./hobies.component.css']
})
export class HobiesComponent implements OnInit {
  mostrar: boolean;
  hobby: string[];
  tab: number;
  title: string;
  json: any = [];

  // Renderer2 escucha elementos del dom
  constructor(private renderer2: Renderer2, private jsonService: JsonService) {

    this.mostrar = false;
    this.hobby = ['correr', 'leer', 'cantar'];
    this.tab = 1;
    this.title = 'ejemplo con ngSwitch';


  }


  ngOnInit() {
    this.usandoRenderer2();
    this.llamarJson();
  }


  llamarJson() {
    this.jsonService.llamarJson().subscribe(json => {
      this.json = json;
      console.log(json);

    });

  }





  ocular() {

    this.mostrar = !this.mostrar;

  }

  usandoRenderer2() {
    this.renderer2.listen('document', 'click', (e) => {
      console.log('posición X', e.clientX);
      console.log('posición Y', e.clientY);
    });
  }


  formulary(datos) {

    console.log(datos.value);


    if (datos.value === '') {

      alert('no puede estar vacio');
      datos.valu = !null;

    } else {
      this.hobby.push(datos.value);
      datos.value = '';
      return false;
    }



  }


}
