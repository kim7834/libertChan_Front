import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Image } from 'src/app/models/image';
import { Message } from 'src/app/models/message';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-panel-modal-message',
  templateUrl: './panelModalMessage.component.html',
  styleUrls: ['./ng-modal.scss']
})
export class PanelModalMessageComponent implements OnInit {
  // FIXME: what is id ?
  // @Input() id: number;
  messageForm: FormGroup;
  @Input() topicId: number;
  @Input() messageList: Message[];

  // TODO: do i need a bool for somewhere ?
  // submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) {
    this.createForm();
  }

  ngOnInit() {}

  // closeModal() {
  //   this.activeModal.close('Modal closed');
  // }

  private createForm() {
    this.messageForm = this.formBuilder.group({
      author: '',
      textContent: '',
      imageLocation: 'https://picsum.photos/200'
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.messageForm.controls;
  }

  onSubmit(messageForm) {
    this.messageService
      .createMessage(
        new Message(
          this.f.author.value,
          this.f.textContent.value,
          new Image(this.f.imageLocation.value)
        ),
        this.topicId
      )
      .subscribe((m: Message) => {
        this.messageList.push(m);
      });
    this.messageForm.reset();
  }
}
