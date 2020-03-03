import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../../services/channel.service';
import { Channel } from 'src/app/models/channel';
import { Message } from 'src/app/models/message';
import { MessageService } from 'src/app/services/message.service';
import { AuthentificationService } from 'src/app/Auth/authentification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lastMessages: Message[];




  constructor(
    public loginService: AuthentificationService,
    private channelService: ChannelService,
    private messageService: MessageService
  ) {}




  channelList: Array<Channel>;

  ngOnInit() {
    this.channelService.getChannels().subscribe(response => {
      this.channelList = response as Array<Channel>;
    });

    this.messageService.getLastMessages(8).subscribe(response => {
      this.lastMessages = response as Message[];
    });
  }
}
