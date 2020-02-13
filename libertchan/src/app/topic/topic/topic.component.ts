import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Topic } from 'src/app/models/topic';
import { TopicService } from 'src/app/services/topic.service';
import { Message } from 'src/app/models/message';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  topic: Topic;
  messages: Message[];

  constructor(
    private route: ActivatedRoute,
    private topicService: TopicService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.topicService.getTopicById(p.id).subscribe(topic => {
        console.log(topic);
        this.topic = topic;
        this.messageService
          .getMessagesByTopicId(p.id)
          .subscribe((messages: Message[]) => {
            this.messages = messages;
          });
      });
    });
  }
}
