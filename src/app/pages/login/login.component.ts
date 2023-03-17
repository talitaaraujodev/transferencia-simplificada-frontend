import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}
  auth() {
    this.userService.login(this.email, this.password).subscribe({
      next: (result) => {
        console.log(result);
        this.router.navigate(['']);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Usuário logado com sucesso!',
          showConfirmButton: false,
          timer: 2000,
        });
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.message,
        });
      },
    });
  }
}
