import { Injectable } from '@angular/core';
// import { Lista } from '../models/listas.model';
import { Lista } from '../models'; // no se coloca toda la ruta poque tiene index.ts



@Injectable()
export class DeseosService {
  listas: Lista[] = [];
  constructor() {
    /*let lista1 = new Lista('Compras de Supermercado');
    let lista2 = new Lista('Juegos que deseo');
    let lista3 = new Lista('Cosas de la Universidad');

    this.listas.push( lista1 );
    this.listas.push( lista2 );
    this.listas.push( lista3 );*/

    const lista1 = new Lista('Recolectar piedras del infinito');
    const lista2 = new Lista('Heroes a Vencer')

    this.listas.push(lista1,lista2);

    console.log("this.listas");
  }
}
