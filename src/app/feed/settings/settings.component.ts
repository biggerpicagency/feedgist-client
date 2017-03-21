import { Component, OnInit, OnDestroy } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { Subscription } from 'rxjs/Rx';
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
  private settingsObservable: Subscription;
  searchTermValue: String = '';
  results: Object;
  searchTerm$ = new Subject<string>();
  categories = [];
  all = [];
  otherPages = [];
  selectedPagesBar = null;
  loadingShow = false;
  lazyLoadingOffset: Number = 100;
  otherPagesLoaded: Boolean = false;

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

  ngOnInit() {
    this.loadingShow = true;
    this.settingsObservable = this.api.get('feed/settings').subscribe((res) => {
      this.searchService.pages = res.all;
      this.selected.pagesIds = res.selected.ids;
      this.selected.init(res.categories, this.selected.pagesIds, res.selected.pages);
      
      if (res.categories[0].name === 'Other pages') {
        this.categories = res.categories.splice(1);
        this.otherPages = res.categories[0];
      } else {
        this.categories = res.categories;
      }

      if (res.selected.pages.length > 0) {
        this.openSelectedPagesBar();
      }
      
      this.loadingShow = false;
    });
  }

  ngOnDestroy() {
    this.closeSelectedPagesBar();
    this.settingsObservable.unsubscribe();
  }

  openSelectedPagesBar() {
    this.selectedPagesBar = this.snackBar.openFromComponent(SelectedPagesComponent);
  }

  closeSelectedPagesBar() {
    if (this.selectedPagesBar) {
      this.selectedPagesBar.dismiss();
    }
  }

  selectPage(page) {
    if (this.selected.pagesIds.length === 0) {
      this.openSelectedPagesBar();
    }
    
    this.selected.select(page);
  }

  clearSearchTerm(searchTerm) {
    searchTerm.value = '';
  }

  isSelected(pageId) {
    return this.selected.pagesIds.indexOf(pageId) !== -1;
  }

  loadOtherPages() {
    this.otherPagesLoaded = true;
  }
}
