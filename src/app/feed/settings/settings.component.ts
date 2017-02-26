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

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.get('feed/settings')
            .subscribe((res) => {
              this.categories = res.categories;
              this.all = res.all;
            });
  }

}
