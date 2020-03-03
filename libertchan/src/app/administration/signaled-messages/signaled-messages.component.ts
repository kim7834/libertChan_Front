import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-signaled-messages',
  templateUrl: './signaled-messages.component.html',
  styleUrls: ['./signaled-messages.component.scss']
})
export class SignaledMessagesComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  signaledMessages: Message[];

  ngOnInit(): void {
    this.messageService.getSignaled().subscribe((result: Message[]) => {
      this.signaledMessages = result;
      console.log(this.signaledMessages);
    });
  }
}
