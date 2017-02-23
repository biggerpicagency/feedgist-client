import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate() {
    if (localStorage.getItem('ng2-ui-auth_token')) {
      return true;
    }
    
    this.router.navigateByUrl('/auth/login');
    return false;
  }

}