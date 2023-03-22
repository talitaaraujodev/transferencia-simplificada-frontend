import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wallet } from 'src/app/models/Wallet';
import { environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class WalletService {
  constructor(private httpClient: HttpClient) {}
  
  getWallets(): Observable<Wallet[]> {
    return this.httpClient.get<Wallet[]>(`${environment.apiURL}/wallets`);
  }
}
