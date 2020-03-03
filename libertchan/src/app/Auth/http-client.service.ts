import { HttpClient } from '@angular/common/http';
import { ConnectedUserComponent } from './../connected-user/connected-user.component';
import { Injectable } from '@angular/core';

export class ConnectedUser{
  constructor(
    public name:string,
    public connectedId:string,
  ) {}

}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(

    private httpClient:HttpClient
    ) {
       }

       getConnectedUsers()
    {
      let username='username'
    let password='password'
      console.log("test call");
      return this.httpClient.get<ConnectedUser[]>('http://localhost:8080/users');
    }



    public createConnectedUser(connectedUser) {

      let username='username'
    let password='password'
      return this.httpClient.post<ConnectedUser>("http://localhost:8080/users", connectedUser);
    }
  }
