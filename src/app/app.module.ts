import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { Ng2UiAuthModule, CustomConfig } from 'ng2-ui-auth';

import { HttpService } from './shared/http.service';
import { AppRoutingModule } from './app-routing.module'; 
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { FeedModule } from './feed/feed.module';
import { SettingsModule } from './settings/settings.module';
import { MainComponent } from './main.component';
import { environment } from '../environments/environment';
import { AboutComponent } from './about/about.component';

export class MyAuthConfig extends CustomConfig {
    defaultHeaders = {'Content-Type': 'application/json'};
    providers = {
      facebook: {
        clientId: '1148407601949396', 
        url: environment.apiEndpoint + 'auth/facebookCallback',
        redirectUri: window.location.origin + '/auth/facebook',
        requiredUrlParams: ['display', 'scope'],
        scope: ['email', 'user_likes'],
        scopeDelimiter: ',',
      }
    };
}

export function test(backend: XHRBackend, options: RequestOptions) {
  return new HttpService(backend, options);
}

export let httpProvider = {
  provide: HttpService,
  useFactory: test,
  deps: [XHRBackend, RequestOptions]
};

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    Ng2UiAuthModule.forRoot(MyAuthConfig),
    AppRoutingModule,
    AuthModule,
    FeedModule,
    SettingsModule,
    SharedModule
  ],
  providers: [httpProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
