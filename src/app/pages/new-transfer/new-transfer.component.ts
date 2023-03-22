import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { Wallet } from 'src/app/models/Wallet';
import { WalletService } from 'src/app/services/wallet/wallet.service';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent {
  transferForm!: FormGroup;
  wallets: Wallet[] = [];

  constructor(private walletService: WalletService) {}

  ngOnInit(): void {
    this.transferForm = new FormGroup({
      wallet: new FormControl('', [Validators.required]),
      value: new FormControl('', [Validators.required]),
    });
    this.getWallets();
  }

  getWallets() {
    this.walletService.getWallets().subscribe({
      next: (result) => {
        this.wallets = result;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      },
    });
  }
  saveTransfer() {
    if (this.transferForm.valid) {
      const { wallet, value } = this.transferForm.getRawValue();
      console.log(wallet, value);
    }
  }
}
