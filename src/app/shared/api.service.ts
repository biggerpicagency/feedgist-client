import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { HttpService } from './http.service';

import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {

  constructor(private http: HttpService, private router: Router) { }

  get(url) {
    return this.http.get(environment.apiEndpoint + url)
                    .map((res) => {
                      return this.handleResponse(res);
                    })
                    .catch((error: Response) => {
                      return this.handleError(error);
                    });
  }

  put(url, data) {
    return this.http.put(environment.apiEndpoint + url, JSON.stringify(data))
                    .map((res) => {
                      return this.handleResponse(res);
                    })
                    .catch((error: Response) => {
                      return this.handleError(error);
                    });
  }

  post(url, data) {
    return this.http.post(environment.apiEndpoint + url, JSON.stringify(data))
                    .map((res) => {
                      return this.handleResponse(res);
                    })
                    .catch((error: Response) => {
                      return this.handleError(error);
                    });
  }

  delete(url) {
    return this.http.delete(environment.apiEndpoint + url)
                    .map((res) => {
                      return this.handleResponse(res);
                    })
                    .catch((error: Response) => {
                      return this.handleError(error);
                    });
  }

  private handleResponse(res) {
    let response = res.json();
    this.setRefreshedToken(response);
    return response;
  }

  private handleError(error: Response | any) {
    let response = error.json();

    if (response.redirect) {
      this.router.navigateByUrl('/auth/logout');
    }

    return Observable.throw(response.error || 'Server error');
  }

  setRefreshedToken(res) {
    if (res.token) {
      localStorage.setItem('ng2-ui-auth_token', res.token);
    }
  }
}
