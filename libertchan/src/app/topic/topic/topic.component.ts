import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Message } from 'src/app/models/message';
import { Topic } from 'src/app/models/topic';
import { MessageService } from 'src/app/services/message.service';
import { TopicService } from 'src/app/services/topic.service';



@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  topic: Topic;
  message: Message;
  messages: Message[];
  topics: any;

  constructor(
    private route: ActivatedRoute,
    private topicService: TopicService,
    private messageService: MessageService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.topicService.getTopicById(p.id).subscribe(topic => {
        this.topic = topic;
        this.messageService
          .getMessagesByTopicId(p.id)
          .subscribe((messages: Message[]) => {
            this.messages = messages;
          });
      });
    });
  }

  currentChannel(arg0: Topic, currentChannel: any) {
    throw new Error('Method not implemented.');
  }
}
