import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'feed-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    return this.api.get('feed/list').subscribe((res) => {
      this.list = res.list;
    });
  }

}
