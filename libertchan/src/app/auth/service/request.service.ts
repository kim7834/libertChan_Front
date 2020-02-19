import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }

  get endPoint(): string {
    return 'http://localhost:8080/users';
  }
}
