import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanLoad {

  constructor(private route: Router, private authService: AuthService) { }

  canLoad(): boolean {
    return this.authService.isAdmin();
  }

}
