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
    private router: Router,
    private route: ActivatedRoute
  ) {}

  currentChannel: Channel;
  private routeSub: Subscription;

  ngOnInit() {
    console.log(this.router.url);
    console.log(this.router.config);

    console.log('-----------');

    this.routeSub = this.route.params.subscribe(params => {
      console.log(params); //log the entire params object
      console.log(params.shortName); //log the value of id



      this.channelService.getChannelByShortName(params.shortName).subscribe(response => {
        this.currentChannel = response as Channel;
      });
    });

  }
}
