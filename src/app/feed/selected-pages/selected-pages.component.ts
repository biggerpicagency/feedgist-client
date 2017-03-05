import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectedPagesService } from './selected-pages.service';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-selected-pages',
  templateUrl: './selected-pages.component.html',
  styleUrls: ['./selected-pages.component.scss']
})
export class SelectedPagesComponent implements OnInit {
  pages = [];
  pagesIds = [];
  loading: Boolean = false;

  constructor(private selectedPages: SelectedPagesService, private api: ApiService, private router: Router) {
    this.pages = this.selectedPages.pages;
    this.pagesIds = this.selectedPages.pagesIds;
  }

  ngOnInit() {
  }

  unSelect(page) {
    let index = this.pagesIds.indexOf(page.id);
    if (index > -1) {
      this.pagesIds.splice(index, 1);
    }
    
  	this.selectedPages.remove(page);
  }

  save() {
    this.loading = true;
    this.api.put('feed/settings', {
      pages: this.pagesIds
    })
    .subscribe(() => {
      this.loading = false;
      this.router.navigateByUrl('/feed');
    });
  }
}
