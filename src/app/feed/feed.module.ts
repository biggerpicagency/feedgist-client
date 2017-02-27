import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { FeedRoutingModule } from './feed-routing.module';
import { ListComponent } from './list/list.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [
    CommonModule,
    FeedRoutingModule,
    MaterialModule
  ],
  declarations: [ListComponent, SettingsComponent]
})
export class FeedModule { }
