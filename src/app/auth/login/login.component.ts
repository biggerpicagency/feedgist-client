import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'ng2-ui-auth';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private auth: AuthService, private router: Router) { }

  loginWithFacebook() {
      this.auth.authenticate('facebook')
          .subscribe((res) => {
            let response = res.json();
            if (response.pagesCounter === 0) {
              this.router.navigateByUrl('/feed/settings');
            } else {
              this.router.navigateByUrl('/feed');
            }
          });
  }

}
