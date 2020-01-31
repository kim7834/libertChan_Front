import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../service/channel.service';
import { Channel } from 'src/app/models/channel';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private channelService: ChannelService,
    // Router allow to retrieve full url
    // private router: Router,
    private route: ActivatedRoute
  ) {}

  /**
    Exemple of routing with generic name for url, obtain the shortname of channel from url then get the associated channel
    Doc : https://stackoverflow.com/questions/42839074/extract-id-from-url-using-angular2
     */

  currentChannel: Channel;
  private routeSub: Subscription;

  ngOnInit() {
    // console.log(this.router.url);
    // console.log(this.router.config);

    // console.log('-----------');

    this.route.params.subscribe(params => {
      // console.log(params); //log the entire params object
      // console.log(params.shortName); //log the value of id
      this.channelService.getChannelByShortName(params.shortName).subscribe(response => {
        this.currentChannel = response as Channel;
      });
    });

  }
}
