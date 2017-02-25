import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate() {
    if (localStorage.getItem('ng2-ui-auth_token')) {
      this.router.navigateByUrl('/feed');
      return false;
    }

    return true;
  }

}