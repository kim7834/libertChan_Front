import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChannelService } from '../service/channel.service';
import { Channel } from 'src/app/models/channel';
import { Observable, Subscription } from 'rxjs';
import { NavbarComponent } from '../navbar/navbar.component';
import { SelectedChannelService } from '../selected-channel.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(
    private channelService: ChannelService,
    private selectedChannelService: SelectedChannelService
  ) {}

  currentChannel: Channel;
  currentChoice: string;
  channelSubscription: Subscription;

  ngOnInit() {
    if (this.selectedChannelService.channelShortName.getValue() === '') {
      this.selectedChannelService.update('ac');
    }

    this.channelSubscription = this.selectedChannelService.channelShortName.subscribe(
      value => {
        this.channelService.getChannelByShortName(value).subscribe(response => {
          this.currentChannel = response as Channel;
        });
      }
    );
  }

  ngOnDestroy() {
    this.channelSubscription.unsubscribe();
  }
}
