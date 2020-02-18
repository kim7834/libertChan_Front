import { TestBed } from '@angular/core/testing';

import { HttpInterceptorAuth.ServiceService } from './http-interceptor-auth.service.service';

describe('HttpInterceptorAuth.ServiceService', () => {
  let service: HttpInterceptorAuth.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpInterceptorAuth.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
