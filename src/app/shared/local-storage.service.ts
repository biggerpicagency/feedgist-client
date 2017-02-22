import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  set(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

}
