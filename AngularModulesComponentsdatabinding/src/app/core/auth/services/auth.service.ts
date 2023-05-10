import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { LoginForm, User } from './../../interfaces/register-form.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(user: LoginForm) {
    return this.httpClient.get(`${environment.baseApiUrl}users?email=${user.email}&password=${user.password}`);
  }

  register(user: User) {
    return this.httpClient.post(`${environment.baseApiUrl}users`, user);
  }

  isAdmin() {
    const logged_user = localStorage.getItem('logged_user');
    const loggedUser = JSON.parse(logged_user!);
    return loggedUser.role === 'admin';

  }
}

