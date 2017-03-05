import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalStorageService } from './local-storage.service';
import { ApiService } from './api.service';
import { CutTextPipe } from './cut-text.pipe';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
      LocalStorageService,
      ApiService
  ],
  declarations: [CutTextPipe],
  exports: [CutTextPipe]
})
export class SharedModule { }
