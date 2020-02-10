import { Observable } from 'rxjs';

export interface AuthApi {
  login(data: any): Observable<any>;
  logout(): Observable<void>;
}
