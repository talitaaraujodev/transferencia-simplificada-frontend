import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { ForgoutPasswordComponent } from './forgout-password/forgout-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { TransfersComponent } from './transfers/transfers.component';
import { NewTransferComponent } from './new-transfer/new-transfer.component';
import { NewWalletComponent } from './new-wallet/new-wallet.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'transferencias', component: TransfersComponent },
      { path: 'nova-transferencia', component: NewTransferComponent },
      { path: 'nova-carteira', component: NewWalletComponent },
    ],
    canActivate: [AuthGuard],
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
