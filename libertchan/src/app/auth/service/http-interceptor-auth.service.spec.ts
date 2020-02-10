import { HttpInterceptorAuthService } from './http-interceptor-auth.service';
import { TestBed } from '@angular/core/testing/testing';



describe('HttpInterceptorAuthService', () => {


  beforeEach(() => {
    TestBed.configureTestingModule({});

  });

  it('should be created', () => {
    const service: HttpInterceptorAuthService = TestBed.get(HttpInterceptorAuthService);
    expect(service).toBeTruthy();
  });
});
