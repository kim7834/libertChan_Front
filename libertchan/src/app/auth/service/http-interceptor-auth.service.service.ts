
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthApiService } from './auth-api.service';




@Injectable()
export class HttpInterceptorAuthService implements HttpInterceptor {

  constructor(private authService: AuthApiService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler
    ): Observable<HttpEvent<any>> {
    request = request.clone({
withCredentials : true});
    return next.handle(request);
    }
  }

