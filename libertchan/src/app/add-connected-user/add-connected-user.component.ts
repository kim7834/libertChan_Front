import { ConnectedUser, HttpClientService } from './../Auth/http-client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-connected-user',
  templateUrl: './add-connected-user.component.html',
  styleUrls: ['./add-connected-user.component.scss']
})
export class AddConnectedUserComponent implements OnInit {

  user: ConnectedUser = new ConnectedUser("","",);

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit(){
  }

createConnectedUser(): void {
    this.httpClientService.createConnectedUser(this.user)
        .subscribe( data => {
          alert("User created successfully.");
        });

  };

}
