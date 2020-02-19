import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Image } from 'src/app/models/image';
import { Message } from 'src/app/models/message';
import { Topic } from 'src/app/models/topic';
import { TopicService } from 'src/app/services/topic.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  apiEndPoint = 'http://192.168.1.89:8080/api/uploadFile';
  myImage: File;
  imageLink: string;

  // TODO: do i need a bool for somewhere ?
  // submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private topicService: TopicService,
    private http: HttpClient
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
      imageLocation: '',
      monImage: ''
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    //console.log(this.createTopicForm.controls);

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

    this.createTopicForm.reset();
  }

  fileChange(event) {
    if (event.target.files.length > 0) {
      this.myImage = event.target.files[0];
    }
  }

  fileUpload() {
    //console.log('test');
    let formData: FormData = new FormData();
    formData.append('file', this.myImage, this.myImage.name);
    let headers = new HttpHeaders();
    this.http.post(`${this.apiEndPoint}`, formData, { headers }).subscribe(
      (data: any) => {
        console.log(data);
        this.imageLink = data.fileDownloadUri;
      },
      error => console.log(error)
    );
  }
}
