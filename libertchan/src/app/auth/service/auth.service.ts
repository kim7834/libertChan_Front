import { Injectable, InjectionToken, Inject } from '@angular/core';
import { BehaviorSubject, of, Observable } from 'rxjs';
import { AuthApi } from './auth-api';
import { StorageMap } from '@ngx-pwa/local-storage';
import { switchMap, tap, map, filter, catchError } from 'rxjs/operators';
import { stringify } from 'querystring';

export const AuthApiToken = new InjectionToken('AuthApiToken');

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth$ = new BehaviorSubject<boolean>(null);
  userAuth$ = new BehaviorSubject<any>(null);

  constructor(
    @Inject(AuthApiToken) private api: AuthApi,
    private storage: StorageMap
    ) {
  }

  get isAuthentificated$() {
    return this.isAuth$.pipe(
      switchMap(isAuth => {
        if (isAuth === null) {
          return this.load().pipe(
            tap((value) => {
              if (value) {
                this.isAuth$.next(true);
                this.userAuth$.next(value);
              } else {
                this.isAuth$.next(false);
              }
            }),
            map(() => null),
          );
        }
        return of(isAuth);
      }),
      filter(isAuth => isAuth !== null),
    );
  }

  get user$() {
    return this.userAuth$.pipe(
      filter(user => user !== null),
    );
  }

  login(username: string, password: string): Observable<any> {
    return this.api.login(username, password).pipe(
      switchMap(value => this.save(value)),
      tap((value) => {
        this.isAuth$.next(true);
        this.userAuth$.next(value);
      }),
    );
  }

  logout(): Observable<void> {
    return this.api.logout().pipe(
      catchError(reason => {
        return of(true);
      }),
      switchMap(() => {
        return this.storage.clear();
      }),
      map(() => {
      }),
      tap((value) => {
        this.isAuth$.next(false);
        this.userAuth$.next(null);
      })
    );
  }

  save(data): Observable<any> {
    return this.storage.set('STORE', data).pipe(
      map(() => data)
    );
  }

  load(): Observable<any> {
    return this.storage.get('STORE');
  }


}
