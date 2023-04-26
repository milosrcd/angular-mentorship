import { LoginForm, RegisterForm } from './../../interfaces/register-form.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(user: LoginForm) {
    return this.httpClient.get(`${environment.baseApiUrl}users?email=${user.email}&password=${user.password}`);
  }
}

