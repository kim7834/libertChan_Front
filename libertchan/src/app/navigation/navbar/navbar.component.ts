import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../service/channel.service';
import { Channel } from '../../models/channel';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private channelService: ChannelService
  ) { }

  channelList: Array<Channel>;


  ngOnInit() {
      this.channelService.getChannelList().subscribe(
        response  => {
          this.channelList = response as Array<Channel>;
          // const channelList2 = response as Array<Channel>;
          // channelList2.forEach(element => {
          //   console.log(element.shortName);
          // });
        }
      );
  }



}
