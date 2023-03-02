import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @Output() register = new EventEmitter<any>();

  email: string = '';
  password: string = '';

  auth() {
    console.log(this.email);
    console.log(this.password);
  }
}
