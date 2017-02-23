import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'ng2-ui-auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth: AuthService, private router: Router) { }

  loginWithFacebook() {
      this.auth.authenticate('facebook')
          .subscribe(() => {
            this.router.navigateByUrl('/feed');
          });
  }

}
