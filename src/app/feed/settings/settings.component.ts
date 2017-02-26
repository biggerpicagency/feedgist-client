import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'feed-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  categories = [];
  all = [];
  selectedPages = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.get('feed/settings')
            .subscribe((res) => {
              this.categories = res.categories;
              this.all = res.all;
              this.selectedPages = res.selected;
            });
  }

  selectPage(pageId) {
    let index = this.selectedPages.indexOf(pageId);

    if (index > -1) {
      this.selectedPages.splice(index, 1);
    } else {
      this.selectedPages.push(pageId);
    }
  }

  isSelected(pageId) {
    return this.selectedPages.indexOf(pageId) > -1;
  }

  save() {
    this.api.put('feed/settings', {
      pages: this.selectedPages
    })
    .subscribe();
  }
}
