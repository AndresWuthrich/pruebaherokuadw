import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {
  title = 'cicloadw';

  public ejemplo = 'Hola Mundo';
  public ejemplo2 = 'Hola Mundo2';

  public edadUno;
  public edadDos;
  public suma;
  public promedio;

  constructor() { }

  ngOnInit(): void {
  }

  PruebaClick() {
    this.ejemplo2 = 'Ejecutamos el evento!!!';
  }
  Calcular() {
    // this.suma = 'SUMA';
    // this.promedio = 'PROMEDIO';

    this.suma = this.edadUno + this.edadDos;
    this.promedio = this.suma / 2;
  }
  Limpiar() {
    this.edadUno = '';
    this.edadDos = '';
    this.suma = '';
    this.promedio = '';
  }
}
