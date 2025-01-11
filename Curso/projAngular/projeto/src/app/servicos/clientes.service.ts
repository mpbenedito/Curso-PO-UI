import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Icliente } from '../interfaces/icliente';
import { environment, urlAPI } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  constructor() {}

  #http = inject(HttpClient);
  private url: string = urlAPI.urlBase;
  private apiClientes: string = this.url + urlAPI.rotaUsers;

  public getClientesArray(): Array<Icliente> {
    let aClientes: Icliente[] = [];

    aClientes.push(
      {
        id: 1,
        name: { firstname: 'Marcelo', lastname: 'Benedito' },
        email: 'marcelo@cursoangular.com.br',
      },
      {
        id: 2,
        name: { firstname: 'Jose', lastname: 'Silva' },
        email: 'jose@cursoangular.com.br',
      },
      {
        id: 3,
        name: { firstname: 'Joao', lastname: 'Paulo' },
        email: 'jp@cursoangular.com.br',
      },
      {
        id: 4,
        name: { firstname: 'Ana Maria', lastname: 'Andrade' },
        email: 'aandrade@cursoangular.com.br',
      },
      {
        id: 5,
        name: { firstname: 'Isabel', lastname: 'Cristina' },
        email: 'icdsp@cursoangular.com.br',
      }
    );

    return aClientes;
  }



  public getClientesApi(): Array<Icliente> {
    let aClientes: Icliente[] = [];

    /*    let url: string = 'https://fakestoreapi.com/users'; */
    let url = this.apiClientes;

    let req = this.#http.get<Array<Icliente>>(url);
    let subscricao = {
      next(dados: Array<Icliente>) {
        dados.forEach((elem: Icliente) =>
          aClientes.push({ id: elem.id, name: elem.name, email: elem.email })
        );
      },
      erro(err: any) {
        console.log(err);
      },
      complete() {
        console.log('complete');
      },
    };

    req.subscribe(subscricao);

    return aClientes;
  }
}
