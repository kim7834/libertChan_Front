import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../service/channel.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private channelService: ChannelService
  ) { }



  ngOnInit() {
    // console.log("Allo");

      this.channelService.getChannelList().subscribe(
        response  => {
          const channelList = response as Array<object>;
          // console.log((channelList.length));
          channelList.forEach(element => {
            console.log(element.shortName);

          });
        }
      );
  }



}
