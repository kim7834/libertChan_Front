import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Image } from 'src/app/models/image';
import { Message } from 'src/app/models/message';
import { Topic } from 'src/app/models/topic';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-panel-modal-create-thread',
  templateUrl: './panelModalCreateThread.component.html',
  styleUrls: ['./ng-modal.scss']
})
export class PanelModalCreateThreadComponent implements OnInit {
  // FIXME: what is id ?
  // @Input() id: number;
  createTopicForm: FormGroup;
  @Input() channelName: string;
  @Input() topicsList: Topic[];

  // TODO: do i need a bool for somewhere ?
  // submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private topicService: TopicService
  ) {
    this.createForm();
  }

  ngOnInit() {}

  // closeModal() {
  //   this.activeModal.close('Modal closed');
  // }

  private createForm() {
    this.createTopicForm = this.formBuilder.group({
      author: '',
      subject: '',
      textContent: '',
      imageLocation:
        'http://192.168.1.89:8080/api/downloadFile/WIN_20200218_16_28_42_Pro.jpg'
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.createTopicForm.controls;
  }

  onSubmit(createTopicForm) {
    this.topicService
      .createTopic(
        new Topic(this.f.subject.value, [
          new Message(
            this.f.author.value,
            this.f.textContent.value,
            new Image(this.f.imageLocation.value)
          )
        ]),
        this.channelName
      )
      .subscribe(topic => {
        this.topicsList.splice(0, 0, topic);
      });
    console.log(this.f);

    this.createTopicForm.reset();
  }
}
