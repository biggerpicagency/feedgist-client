import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { MdSnackBar } from '@angular/material';

import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
  private formSubmissionSubsription: Subscription;
  loading: Boolean = false;

  form: Object = {
    message: ''
  };
  constructor(private api: ApiService, public snackBar: MdSnackBar) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.formSubmissionSubsription) {
      this.formSubmissionSubsription.unsubscribe();
    }
  }

  sendMessage() {
    this.loading = true;
    this.formSubmissionSubsription = this.api.post('sendMessage', this.form).subscribe((res) => {
      this.loading = false;
      this.snackBar.open(res.message, null, {
        duration: 1000
      });
    });
  }

}
