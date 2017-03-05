import { Component, OnInit, OnDestroy } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { Subject } from 'rxjs/Subject';

import { ApiService } from '../../shared/api.service';
import { SelectedPagesService } from '../selected-pages/selected-pages.service';
import { SearchService } from './search.service';
import { SelectedPagesComponent } from '../selected-pages/selected-pages.component';

@Component({
  selector: 'feed-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {
  searchTermValue: String = '';
  results: Object;
  searchTerm$ = new Subject<string>();
  categories = [];
  all = [];
  selectedPagesBar = null;
  loadingShow = false;
  lazyLoadingOffset: Number = 100;

  constructor(
              private api: ApiService, 
              public snackBar: MdSnackBar, 
              private selected: SelectedPagesService, 
              private searchService: SearchService
  ) {
    this.searchService.search(this.searchTerm$)
                      .subscribe(results => {
                        this.results = results;
                      });
  }

  openSelectedPagesBar() {
    this.selectedPagesBar = this.snackBar.openFromComponent(SelectedPagesComponent);
  }

  closeSelectedPagesBar() {
    this.selectedPagesBar.dismiss();
  }

  selectPage(page) {
    this.selected.select(page);
  }

  clearSearchTerm(searchTerm) {
    searchTerm.value = '';
  }

  isSelected(pageId) {
    return this.selected.pagesIds.indexOf(pageId) !== -1;
  }

  ngOnInit() {
    this.loadingShow = true;
    this.api.get('feed/settings')
            .subscribe((res) => {
              this.searchService.pages = res.all;
              this.categories = res.categories;
              this.selected.pagesIds = res.selected;
              this.selected.init(this.categories, this.selected.pagesIds);

              this.openSelectedPagesBar();
              this.loadingShow = false;
            });
  }

  ngOnDestroy() {
    this.closeSelectedPagesBar();
  }
}
