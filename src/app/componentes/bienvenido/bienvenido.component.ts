import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  public ejemplo = 'Hola Mundo';
  public ejemplo2 = 'Hola Mundo';

  constructor() { }

  ngOnInit(): void {
  }

  PruebaClick() {
    this.ejemplo2 = 'Ejecutamos el evento!!!';
  }
}
