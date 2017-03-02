import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalStorageService } from './local-storage.service';
import { ApiService } from './api.service';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
      LocalStorageService,
      ApiService
  ],
  declarations: []
})
export class SharedModule { }
