import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { User } from 'src/app/models/User';
import { BehaviorSubject, Observable } from 'rxjs';
import { utils } from '../../utils';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<any>({});

  constructor(private httpClient: HttpClient) {}

  getUserLogged() {
    const token = utils.getToken();
    if (token) {
      const user = jwt_decode(token);
      this.userSubject.next(user);
      return this.userSubject.asObservable();
    }
    return null;
  }
  register(data: User) {
    return this.httpClient.post(`${environment.apiURL}/users`, data);
  }
  logout() {
    utils.removeToken();
    this.userSubject.next({});
  }
  logged() {
    return utils.getToken() ? true : false;
  }
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${environment.apiURL}/users`);
  }
  getUserById(id: string): Observable<User> {
    return this.httpClient.get<User>(`${environment.apiURL}/users/${id}`);
  }
}
