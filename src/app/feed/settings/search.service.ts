import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class SearchService {
  pages = [];

  constructor() { }

  search(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchPages(term));
  }

  searchPages(term) {
    return new Observable(observer => {
      observer.next(this.pages.filter(page => page.name.toLowerCase().indexOf(term.toLowerCase()) !== -1));
      observer.complete();
    });
  }
}
