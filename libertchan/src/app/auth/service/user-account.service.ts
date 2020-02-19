import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RequestService } from './request.service';
import { Connecteduser } from 'src/app/models/connecteduser';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {
  constructor(private httpClient: HttpClient, private request: RequestService) {
  }
  get endPoint(): string {
    return this.request.endPoint + '/Connecteduser';
  }
  getUserAccounts(): Observable<Connecteduser[]> {
    return this.httpClient.get<Connecteduser[]>(this.endPoint);
  }
  getUserAccountById(id: number): Observable<Connecteduser> {
    return this.httpClient.get<Connecteduser>(`${this.endPoint}/${id}`);
  }
  getUserAccountByMainPseudo(mainpseudo: string): Observable<Connecteduser> {
    return this.httpClient.get<Connecteduser>(
      `${this.endPoint}/mainpseudo/${mainpseudo}`
    );

    }
  // tslint:disable-next-line: eofline
  }
