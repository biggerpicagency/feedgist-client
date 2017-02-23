import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Ng2UiAuthModule, CustomConfig } from 'ng2-ui-auth';

import { AppRoutingModule } from './app-routing.module'; 
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { MainComponent } from './main.component';
import { FeedComponent } from './feed/feed.component';

export class MyAuthConfig extends CustomConfig {
    defaultHeaders = {'Content-Type': 'application/json'};
    providers = {
      facebook: {
        clientId: '1148407601949396', 
        url: 'http://api.feed-gist.dev/api/auth/facebookCallback',
        redirectUrl: '/auth/facebook'
      }
    };
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2UiAuthModule.forRoot(MyAuthConfig),
    AppRoutingModule,
    AuthModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
