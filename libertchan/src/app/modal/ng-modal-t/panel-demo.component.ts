import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-panel-demo',
  templateUrl: './panel-demo.component.html',
  styleUrls: ['./ng-modal-t.scss']
})
export class PanelDemoComponent implements OnInit {
  @Input() id: number;
  myForm: FormGroup;
  // TODO: do i need a bool for somewhere ?
  // submitted = false;

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
    this.myForm = this.formBuilder.group({
      title: '',
      content: '',
      imageLink: 'https://picsum.photos/200'
    });
  }


  onSubmit() {

    // TODO: Send form to DB using service ?
    //  this.submitted = true;
    // this.topicService.createTopic()
    }

  // public submitForm() {
  // //   this.activeModal.close(this.myForm.value);
  // this.myForm.value;
  // }
}
