import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { MaterialModule } from '@angular/material';

@Component({
  selector: 'feed-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  list = [];
  loadingShow = false;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.loadingShow = true;
    return this.api.get('feed/list').subscribe((res) => {
      this.list = res.list;
      this.loadingShow = false;
    });
  }

}
