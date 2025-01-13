import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public usuario: string = '';
  public senha: string = '';
  public loginForm = new FormGroup({
    userLogin: new FormControl('', Validators.required),
    userSenha: new FormControl('', Validators.required)
  })

  // utilizado com data binding
  public submitLogin1(): void {
    console.log('Usuario: ' + this.usuario);
    console.log('Senha: ' + this.senha);
  }

  // utilizado com form binding
  public submitLogin2(formLogin: NgForm): void {
    console.log('Formulário: ', formLogin.value);
  }

  public submitLogin3(): void {
    console.log('Formulario: ', this.loginForm.value)
  }
}
