import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedRoutingModule } from './feed-routing.module';
import { ListComponent } from './list/list.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [
    CommonModule,
    FeedRoutingModule
  ],
  declarations: [ListComponent, SettingsComponent]
})
export class FeedModule { }
