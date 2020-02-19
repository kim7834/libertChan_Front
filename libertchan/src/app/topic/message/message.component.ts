import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() message: Message;
  // @Input() date: Date;
  formatedDate = moment(this.message?.date)
    .locale('fr')
    .format('LLLL');
  // @Input() author: string;
  //@Input() imageLocation: string;
  // @Input() textContent: string;

  showImg = false;

  constructor() {}

  ngOnInit() {}

  getTextContent() {
    this.message.textContent = this.message.textContent.replace(
      '<lien>',
      '<a href="'
    );
    this.message.textContent = this.message.textContent.replace(
      '</lien>',
      '" target="_blank">lien</a>'
    );

    //console.log(this.textContent.split('\n'));
    return this.message.textContent.split('\n');
  }

}
