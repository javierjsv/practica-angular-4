import { Component, OnInit } from '@angular/core';
import { InicioDirective } from './inicio.directive';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  title = 'Bienvenido a la aplicación ';

  constructor() { }

  ngOnInit() {
  }

}
