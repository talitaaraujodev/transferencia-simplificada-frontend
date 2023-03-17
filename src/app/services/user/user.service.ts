import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { User } from 'src/app/models/User';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  register(data: User) {
    return this.httpClient.post(`${environment.apiURL}/users`, data);
  }
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
        tap((response) => {
          console.log(response);
          // const authToken = response.headers.get('x-access-token') ?? '';
          // this.userService.saveToken(authToken);
        })
      );
  }
}
