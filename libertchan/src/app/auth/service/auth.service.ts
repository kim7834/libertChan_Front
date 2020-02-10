import { Injectable, Inject, InjectionToken } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';
import { AuthApiService } from 'src/app/services/auth-api.service';
import { AuthApi } from 'src/app/services/auth-api';

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

  login(data): Observable<any> {
    return this.api.login(data).pipe(
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
