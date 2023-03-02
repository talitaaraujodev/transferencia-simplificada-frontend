import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [],
})
export class RegisterComponent {
  @Output() register = new EventEmitter<any>();
  user = {
    name: '',
    email: '',
    cpf: '',
    telefone: '',
    password: '',
  };
  registrar() {
    console.log(this.user);
  }
}
