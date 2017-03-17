import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './shared/auth-guard';
import { MainComponent } from './main.component';
import { AboutComponent } from './about/about.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/feed'
      },
      {
        path: 'feed',
        loadChildren: './feed/feed.module#FeedModule'
      },
      {
        path: 'settings',
        loadChildren: './settings/settings.module#SettingsModule'
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ]
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }