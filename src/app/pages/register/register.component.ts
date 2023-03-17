import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [],
})
export class RegisterComponent {
  registerForm!: FormGroup;

  constructor(private userService: UserService, private router: Router) {}
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      cpf: new FormControl('', [Validators.required, Validators.minLength(11)]),
      telefone: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  cadastro() {
    if (this.registerForm.valid) {
      const user = this.registerForm.getRawValue() as User;
      this.userService.register(user).subscribe({
        next: (response) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Usuário cadastrado com sucesso!',
            showConfirmButton: false,
            timer: 2000,
          });
          this.router.navigate(['login']);
        },
        error: (error: HttpErrorResponse) => {
          console.error(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.error.message,
          });
        },
      });
    }
  }
}
