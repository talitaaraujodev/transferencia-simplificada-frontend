import { Component } from '@angular/core';

@Component({
  selector: 'app-forgout-password',
  templateUrl: './forgout-password.component.html',
  styleUrls: ['./forgout-password.component.scss'],
})
export class ForgoutPasswordComponent {
  email: string = '';

  reset() {}
}
