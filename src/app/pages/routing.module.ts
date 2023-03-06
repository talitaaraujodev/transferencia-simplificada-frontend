import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteirasComponent } from './carteiras/carteiras.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgoutPasswordComponent } from './forgout-password/forgout-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewCarteiraComponent } from './new-carteira/new-carteira.component';
import { NewTransferenciaComponent } from './new-transferencia/new-transferencia.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { TransferenciasComponent } from './transferencias/transferencias.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'transferencias', component: TransferenciasComponent },
      { path: 'nova-transferencia', component: NewTransferenciaComponent },
      { path: 'carteiras', component: CarteirasComponent },
      { path: 'nova-carteira', component: NewCarteiraComponent },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'forgout-password',
    component: ForgoutPasswordComponent,
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
