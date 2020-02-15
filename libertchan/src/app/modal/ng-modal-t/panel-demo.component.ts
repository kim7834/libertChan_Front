import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TopicService } from 'src/app/services/topic.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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

