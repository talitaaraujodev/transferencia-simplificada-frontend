import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-new-wallet',
  templateUrl: './new-wallet.component.html',
  styleUrls: ['./new-wallet.component.scss'],
})
export class NewWalletComponent {
  walletForm!: FormGroup;
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.walletForm = new FormGroup({
      user: new FormControl('', [Validators.required]),
      value: new FormControl('', [Validators.required]),
    });
    this.getUsers();
  }
  getUsers() {
    this.userService.getUsers().subscribe({
      next: (result) => {
        this.users = result;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      },
    });
  }
  saveWallet() {
    if (this.walletForm.valid) {
      const { user, value } = this.walletForm.getRawValue();
      const data = {
        userId: user,
        balance: value,
      };
      console.log(data);
    }
  }
}
