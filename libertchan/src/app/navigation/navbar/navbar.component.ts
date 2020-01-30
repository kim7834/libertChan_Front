import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChannelService } from '../service/channel.service';
import { Channel } from 'src/app/models/channel';
import { Observable, BehaviorSubject } from 'rxjs';
import { SelectedChannelService } from '../selected-channel.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(
    private channelService: ChannelService,
    private selectedChannelService: SelectedChannelService
  ) {}

  channelList: Array<Channel>;

  ngOnInit() {
    this.channelService.getChannels().subscribe(response => {
      this.channelList = response as Array<Channel>;
    });
  }

  navbarChoice(choice: string) {
    console.log(choice);
    this.selectedChannelService.update(choice);
  }
}
