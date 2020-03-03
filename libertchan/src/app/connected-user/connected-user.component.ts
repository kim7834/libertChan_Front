import { Component, OnInit } from '@angular/core';
import { HttpClientService, ConnectedUser } from '../Auth/http-client.service';

@Component({
  selector: 'app-connected-user',
  templateUrl: './connected-user.component.html',
  styleUrls: ['./connected-user.component.scss']
})
export class ConnectedUserComponent implements OnInit {

  connectedUsers: ConnectedUser[];

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.getConnectedUsers().subscribe(
     response =>{this.connectedUsers = response;}
    );
  }
}
