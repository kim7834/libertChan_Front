import { UserAccountService } from './user-account.service';
import { Connecteduser } from './../../models/connecteduser';
import { RequestService } from './request.service';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthApi } from './auth-api';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthApiService implements AuthApi {
  constructor(
    private httpClient: HttpClient,
    private request: RequestService,
    private userServ: UserAccountService
  ) {}
  get endPointLogin(): string {
    return this.request.endPoint + '/login';
  }
  get endPointLogout(): string {
    return this.request.endPoint + '/logout';
  }
  /**
   * Request back end to log in with specified credentials and returns an Observable of the
   * connected UserAccount if successfully logged in.
   * @param username
   * @param password
   * @returns an Observable of the connected UserAccount if successfully logged in.
   */
  login(username: string, password: string): Observable<Connecteduser> {
    // tslint:disable-next-line: prefer-const
    let params = new HttpParams()
      .set('username', username)
      .set('password', password);
    let user = new BehaviorSubject<Connecteduser>(null);
    this.httpClient
      .post(this.endPointLogin, null, { params })
      .pipe(catchError(val => of(val)))
      .subscribe(err => {
        // we check if value contains an error
        if (err instanceof HttpErrorResponse) {
          alert(err.status + ' : ' + err.message);
        } else {
          // no error : retrieving account
          this.userServ.getUserAccountByMainPseudo(username).subscribe(
            (response: Connecteduser) => user.next(response),
            error => {
              console.log('getUser : error ');
              console.log(error);
            }
          );
        }
      });
    return user;
  }
  logout(): Observable<any> {
    return this.httpClient.get(this.endPointLogout);
  }
}
