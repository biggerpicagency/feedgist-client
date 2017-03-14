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
                    .map((res) => {
                        console.log(res.status);
                        return this.apiResponse(res);
                    })
                    .catch((error:any) => {
                      return Observable.throw(error.json().error || 'Server error')
                    });
  }

  put(url, data) {
    return this.http.put(environment.apiEndpoint + url, JSON.stringify(data))
                    .map((res) => {
                        console.log(res.status);
                        return this.apiResponse(res);
                    })
                    .catch((error:any) => {
                      return Observable.throw(error.json().error || 'Server error')
                    });
  }

  post(url, data) {
    return this.http.post(environment.apiEndpoint + url, JSON.stringify(data))
                    .map((res) => {
                        console.log(res.status);
                        return this.apiResponse(res);
                    })
                    .catch((error:any) => {
                      return Observable.throw(error.json().error || 'Server error')
                    });
  }

  delete(url) {
    return this.http.delete(environment.apiEndpoint + url)
                    .map((res) => {
                        console.log(res.status);
                        return this.apiResponse(res);
                    })
                    .catch((error:any) => {
                      return Observable.throw(error.json().error || 'Server error')
                    });
  }

  apiResponse(res) {
    let response = res.json();
    this.setRefreshedToken(response);
    return response;
  }

  setRefreshedToken(res) {
    if (res.token) {
      localStorage.setItem('ng2-ui-auth_token', res.token);
    }
  }
}
