import { Component, Inject } from '@angular/core';
import { AuthService } from 'ng2-ui-auth';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private auth: AuthService) { }

  loginWithFacebook() {
      this.auth.authenticate('facebook')
          .subscribe((res) => {
            let body = res.json();
            console.log(body);
          });
  }
}
