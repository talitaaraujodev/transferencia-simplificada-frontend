import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  faArrowRightFromBracket,
  faHome,
  faListUl,
  faMoneyBillTransfer,
  faWallet,
} from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  user$ = this.userService.getUserLogged();
  faHome = faHome;
  faTransfer = faMoneyBillTransfer;
  faList = faListUl;
  faWallet = faWallet;
  faLogout = faArrowRightFromBracket;

  constructor(private userService: UserService, private router: Router) {}

  logout() {
    Swal.fire({
      title: 'Tem certeza que deseja sair?',
      text: 'Para continuar, clique no botao "Sair"',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Sair',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.logout();
        this.router.navigate(['login']);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Usuário deslogado com sucesso!',
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  }
}
