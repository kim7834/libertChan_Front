import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../../services/channel.service';
import { Channel } from 'src/app/models/channel';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private channelService: ChannelService) {}

  channelList: Array<Channel>;

  ngOnInit() {
    this.channelService.getChannels().subscribe(response => {
      this.channelList = response as Array<Channel>;
    });
  }

}
