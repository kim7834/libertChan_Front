import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthApi } from './auth-api';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService implements AuthApi {

  constructor() { }

  login(data): Observable<any> {
    return of(data);
  }

  logout(): Observable<void> {
    return of(true).pipe(
      map(() => {
        return;
      })
    );
  }
}
