import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    SettingsRoutingModule,
    FormsModule
  ],
  declarations: [SettingsComponent]
})
export class SettingsModule { }
