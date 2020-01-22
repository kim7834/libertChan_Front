import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../service/channel.service';
import { Channel } from 'src/app/models/channel';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private channelService: ChannelService) {}

  currentChannel: Channel;
  currentChannelObs: Observable<Channel>;

  ngOnInit() {
    this.channelService.getChannelByShortName('ac').subscribe(response => {
      this.currentChannel = response as Channel;
    });
  }
}
