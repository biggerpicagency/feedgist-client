import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng2-lazyload-image';
import { MaterialModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { FeedRoutingModule } from './feed-routing.module';
import { ListComponent } from './list/list.component';
import { SettingsComponent } from './settings/settings.component';
import { SelectedPagesComponent } from './selected-pages/selected-pages.component';
import { SelectedPagesService } from './selected-pages/selected-pages.service';
import { SearchService } from './settings/search.service';

@NgModule({
  imports: [
    CommonModule,
    FeedRoutingModule,
    MaterialModule,
    LazyLoadImageModule,
    SharedModule
  ],
  providers: [SelectedPagesService, SearchService],
  declarations: [ListComponent, SettingsComponent, SelectedPagesComponent],
  entryComponents: [SelectedPagesComponent]
})
export class FeedModule { }
