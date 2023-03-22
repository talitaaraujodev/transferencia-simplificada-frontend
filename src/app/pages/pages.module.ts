import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RoutingModule } from './routing.module';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../components/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { HomeComponent } from './home/home.component';
import { ForgoutPasswordComponent } from './forgout-password/forgout-password.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewTransferComponent } from './new-transfer/new-transfer.component';
import { NewWalletComponent } from './new-wallet/new-wallet.component';
import { TransfersComponent } from './transfers/transfers.component';
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgoutPasswordComponent,
    HomeComponent,
    NewTransferComponent,
    NewWalletComponent,
    TransfersComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    SweetAlert2Module.forRoot(),
    FontAwesomeModule,
    RoutingModule,
    SharedModule,
  ],
  providers: [],
})
export class PagesModule {}
