import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../service/channel.service';
import { Channel } from 'src/app/models/channel';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private channelService: ChannelService,
    private route: ActivatedRoute
  ) {}

  currentChannel: Channel;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.channelService
        .getChannelByShortName(params.shortName)
        .subscribe(response => {
          this.currentChannel = response as Channel;
        });
    });
  }
}
