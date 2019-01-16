import { Directive, ElementRef } from '@angular/core';

// ElementRef hacerder elementos del DOM

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[Inicio]'
})
export class InicioDirective {

  constructor(elementRef: ElementRef) {
    // nativeElement  equivale al getElementById()
    elementRef.nativeElement.style.color = 'red';
  }

}
