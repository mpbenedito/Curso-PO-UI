import { Component, inject, OnInit } from '@angular/core';
import { Icliente } from '../../interfaces/icliente';
import { ClientesService } from '../../servicos/clientes.service';

@Component({
  selector: 'app-clientes',
  imports: [],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css',
})
export class ClientesComponent implements OnInit {

  public clientes: Array<Icliente> = [];
  #servCliente = inject(ClientesService)

  ngOnInit(): void {

/*    this.clientes = this.servCliente.getClientesArray()
*/

    this.clientes = this.#servCliente.getClientesApi()
  }

}

