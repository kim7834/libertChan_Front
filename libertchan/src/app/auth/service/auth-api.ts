import { Observable } from 'rxjs';
export interface AuthApi {
  login(username: string, password: string): Observable<any>;
  logout(): Observable<void>;

}
