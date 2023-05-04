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
    const loggedUser = JSON.parse(logged_user!);

    if (loggedUser.role === 'user') {
      return false;
    } else {
      return true;
    }
  }

}
