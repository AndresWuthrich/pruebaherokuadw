import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejerclase01',
  templateUrl: './ejerclase01.component.html',
  styleUrls: ['./ejerclase01.component.css']
})
export class Ejerclase01Component implements OnInit {
  public edadUno;
  public edadDos;
  public suma;
  public promedio;

  constructor() { }

  ngOnInit(): void {
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
