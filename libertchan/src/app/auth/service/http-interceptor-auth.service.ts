import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorAuthService implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    return this.authService.isAuthentificated$.pipe(
      switchMap((isAuth) => {
        if (isAuth === true) {
          return this.authService.userAuth$;
        }
        return of(false);
      }),
      switchMap((user) => {
        let request = req;
        if (user) {
          request = req.clone({headers: req.headers.append('auth', user.token)});
        }
        return next.handle(request);
      }),
    );
  }
}
