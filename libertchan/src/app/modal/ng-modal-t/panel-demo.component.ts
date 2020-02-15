import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TopicService } from 'src/app/services/topic.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Topic } from 'src/app/models/topic';
import { Message } from 'src/app/models/message';
import { Image } from 'src/app/models/image';

@Component({
  selector: 'app-panel-demo',
  templateUrl: './panel-demo.component.html',
  styleUrls: ['./ng-modal-t.scss']
})
export class PanelDemoComponent implements OnInit {
  @Input() id: number;
  createTopicForm: FormGroup;
  // TODO: do i need a bool for somewhere ?
  // submitted = false;
  @Input() channelName: string;
  topics: Topic[];

  constructor(
    private formBuilder: FormBuilder,
    private topicService: TopicService,
  ) {
    this.createForm();
  }

  ngOnInit() {}

  // closeModal() {
  //   this.activeModal.close('Modal closed');
  // }

  private createForm() {
    this.createTopicForm = this.formBuilder.group({
      subject: '',
      textContent: '',
      imageLocation: 'https://picsum.photos/200'
    });
  }

    // convenience getter for easy access to form fields
    get f() {
      return this.createTopicForm.controls;
    }




  onSubmit(createTopicForm) {
    console.log('subject ', this.f.subject.value);

    console.log('New mod -> ', createTopicForm.value);
    console.log('a ', this.channelName);

    // this.topicService.createTopic(createTopicForm, )

    // * reset form needed ?
    // this.createTopicForm.reset();

    this.topicService
    .createTopic(
      new Topic(this.f.subject.value, [
        new Message(this.f.textContent.value, new Image(this.f.imageLocation.value))
      ]),
      this.channelName
    ).subscribe();
    console.log('topics ', this.topics);
    // TODO : passer le message crer au parent pour faire une vignette
    // .subscribe(topic => {
    //   this.topics.push(topic);
    //   //console.log(topic);
    // });

  }

    // TODO: Send form to DB using service ?
    // this.myForm.value;
    //  this.submitted = true;
    // this.topicService.createTopic()
    // }

    // * Used by ng-modal
  // public submitForm() {
  //   this.activeModal.close(this.myForm.value);
  // }
}

