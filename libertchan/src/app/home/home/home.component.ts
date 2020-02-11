import { Component, OnInit } from '@angular/core';
import { ChannelService } from 'src/app/navigation/service/channel.service';
import { Channel } from 'src/app/models/channel';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private channelService: ChannelService,
    public authService: AuthService
    ) { }

  channelList: Array<Channel>;


  ngOnInit() {
    this.channelService.getChannels().subscribe(response => {
      this.channelList = response as Array<Channel>;

      console.log('channelList +> ' , this.channelList);

    });
  }

}
