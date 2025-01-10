import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './paginas/home/home.component';
import { ClientesComponent } from './paginas/clientes/clientes.component';
import { OrcamentosComponent } from './paginas/orcamentos/orcamentos.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HomeComponent, ClientesComponent, OrcamentosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto';
}
