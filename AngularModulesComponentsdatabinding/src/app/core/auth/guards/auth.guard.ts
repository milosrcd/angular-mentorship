import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private router: Router) { }

  canLoad(): boolean {
    return this.isAuthenticated();
  }

  canActivate(): boolean {

    return this.isAuthenticated();
  }

  private isAuthenticated(): boolean {
    const logged_user = localStorage.getItem('logged_user');

    if (!logged_user) {
      this.router.navigateByUrl('/login');
      return false;
    } else {
      return true;
    }
  }

}
