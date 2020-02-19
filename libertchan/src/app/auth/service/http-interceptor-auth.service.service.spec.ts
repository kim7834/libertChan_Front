import { TestBed } from '@angular/core/testing';

import { HttpInterceptorAuthService } from './http-interceptor-auth.service';

describe('HttpInterceptorAuthService', () => {


  beforeEach(() =>
    TestBed.configureTestingModule({}));


  it('should be created', () => {
    // tslint:disable-next-line: deprecation
    const service: HttpInterceptorAuthService = TestBed.get(HttpInterceptorAuthService);
    expect(service).toBeTruthy();
  });
});
