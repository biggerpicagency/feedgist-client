import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { FacebookRedirectComponent } from './facebook-redirect.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AuthRoutingModule
  ],
  declarations: [AuthComponent, LoginComponent, LogoutComponent, FacebookRedirectComponent]
})
export class AuthModule { }
