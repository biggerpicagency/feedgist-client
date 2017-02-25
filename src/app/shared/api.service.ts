import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { HttpService } from './http.service';

import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {

  constructor(private http: HttpService) { }

  get(url) {
    return this.http.get(environment.apiEndpoint + url)
                    .map((res) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
