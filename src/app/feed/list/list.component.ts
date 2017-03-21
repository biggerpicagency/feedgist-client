import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { Subscription } from 'rxjs/Rx';

import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'feed-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  private listSubscription: Subscription;
  list = [];
  loadingShow = false;
  lazyLoadingOffset = 100;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getList();
  }

  ngOnDestroy() {
    this.listSubscription.unsubscribe();
  }

  getList() {
    this.loadingShow = true;
    this.listSubscription = this.api.get('feed/list').subscribe((res) => {
      this.list = res.list;
      this.loadingShow = false;
    });
  }
}
