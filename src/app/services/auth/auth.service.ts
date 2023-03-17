import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { utils } from '../../utils';
import { environment } from '../../environments/environment.development';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) {}

  login(email: string, password: string) {
    return this.httpClient
      .post(
        `${environment.apiURL}/login`,
        {
          email: email,
          password: password,
        },
        { observe: 'response' }
      )
      .pipe(
        tap((response: any) => {
          const token = response.body.token;
          utils.setToken(token);
        })
      );
  }
}
