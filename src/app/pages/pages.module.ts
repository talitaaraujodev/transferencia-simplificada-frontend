import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RoutingModule } from './routing.module';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../components/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { HomeComponent } from './home/home.component';
import { NewTransferenciaComponent } from './new-transferencia/new-transferencia.component';
import { TransferenciasComponent } from './transferencias/transferencias.component';
import { NewCarteiraComponent } from './new-carteira/new-carteira.component';
import { CarteirasComponent } from './carteiras/carteiras.component';
import { ForgoutPasswordComponent } from './forgout-password/forgout-password.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgoutPasswordComponent,
    HomeComponent,
    NewTransferenciaComponent,
    TransferenciasComponent,
    NewCarteiraComponent,
    CarteirasComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    SweetAlert2Module.forRoot(),
    RoutingModule,
    SharedModule,
  ],
  providers: [],
})
export class PagesModule {}
