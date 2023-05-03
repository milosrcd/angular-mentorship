import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {

  constructor(private route: Router) { }

  canActivate(): boolean {
    return this.isAuthenticatedRole();
  }

  private isAuthenticatedRole(): boolean {
    const logged_user = localStorage.getItem('logged_user');
    const logged_user_role = localStorage.getItem('logged_user.role');

    if (logged_user && logged_user_role !== 'user') {
      this.route.navigateByUrl('/login');
      return false;
    } else {
      return true;
    }
  }

}
