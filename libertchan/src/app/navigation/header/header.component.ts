import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Channel } from 'src/app/models/channel';
import { ChannelService } from '../../services/channel.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private channelService: ChannelService,
    private route: ActivatedRoute,
  ) {}

  currentChannel: Channel;
  // imgSource: string;
  // imgSource = '../../../assets/images/logo/bird.png';

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
