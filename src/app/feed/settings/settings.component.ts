import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'feed-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.get('feed/settings')
            .subscribe((res) => {
              console.log(res);
            });
  }

}
