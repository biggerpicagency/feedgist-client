import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'ng2-ui-auth';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loading = false;
  isLocalStorageSupported = this.isLocalStorageNameSupported();

  constructor(private auth: AuthService, private router: Router) { }

  loginWithFacebook() {
    this.loading = true;

    this.auth.authenticate('facebook')
        .subscribe((res) => {
          let response = res.json();
          this.loading = false;

          if (response.pagesCounter === 0) {
            this.router.navigateByUrl('/feed/settings');
          } else {
            this.router.navigateByUrl('/feed');
          }
        });
  }

  private isLocalStorageNameSupported() {
    let testKey = 'test';
    let storage = window.sessionStorage;

    try {
      storage.setItem(testKey, '1');
      let testItem = storage.getItem(testKey);
      storage.removeItem(testKey);

      return testItem ? true : false;
    } catch (error) {
      return false;
    }
  }

}
