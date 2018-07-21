

import { Component } from '@angular/core';
import { DeseosService } from './../../services/deseos.service';
import { Lista } from '../../models/listas.model';


@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html'
})

export class PendientesComponent  {
  constructor( public deseosService : DeseosService ) {

  }

  listaSeleccionada(lista: Lista) {
    console.log(lista);
  }
}
