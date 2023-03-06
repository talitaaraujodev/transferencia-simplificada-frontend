import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RoutingModule } from './routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
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

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
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
    RoutingModule,
    SharedModule,
  ],
  providers: [],
})
export class PagesModule {}
