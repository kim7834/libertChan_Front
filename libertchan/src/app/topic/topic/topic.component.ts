import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Topic } from 'src/app/models/topic';
import { TopicService } from 'src/app/services/topic.service';
import { Message } from 'src/app/models/message';
import { MessageService } from 'src/app/services/message.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageModalComponent } from 'src/app/modal/message-modal/message-modal.component';
import { Image } from 'src/app/models/image';

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
        //console.log(topic);
        this.topic = topic;
        this.messageService
          .getMessagesByTopicId(p.id)
          .subscribe((messages: Message[]) => {
            this.messages = messages;
          });
      });
    });
  }

  openTopicModal() {
    const modalRef = this.modalService.open(MessageModalComponent);
    modalRef.componentInstance.id = 10;

    modalRef.result
      .then(result => {
        console.log(result);
        this.message = new Message(result.author, result.content, new Image(result.imageLink));
        //this.message.discussionThread = this.topic;
        console.log(this.message);

        this.messageService
          .createMessage(this.message, this.topic.id)
          .subscribe((addedMessage: Message) => {
            this.messages.push(addedMessage);
          });
      })
      .catch(error => {
        //console.log(error);
      });
  }

  currentChannel(arg0: Topic, currentChannel: any) {
    throw new Error('Method not implemented.');
  }
}
