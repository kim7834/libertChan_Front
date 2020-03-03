import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { Message } from 'src/app/models/message';
import { CitationService } from 'src/app/services/citation.service';
import { MessageService } from 'src/app/services/message.service';

import { NgbtoastService } from 'src/app/services/ngbtoast.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() message: Message;
  formatedDate = moment(this.message?.date)
    .locale('fr')
    .format('LLLL');

  showImg = false;

  constructor(
    private citationService: CitationService,
    private messageService: MessageService,
    public toastService: NgbtoastService
  ) {}

  // TODO: citation brouillon
  quote() {
    // console.log('Message cité : ', this.message.id);
    this.citationService.citation.next(this.message.id);
  }

  ngOnInit() {}

  getTextContent() {
    this.message.textContent = this.message.textContent?.replace(
      '<lien>',
      '<a href="'
    );
    this.message.textContent = this.message.textContent?.replace(
      '</lien>',
      '" target="_blank">lien</a>'
    );

    //console.log(this.textContent.split('\n'));
    return this.message?.textContent?.split('\n');
  }

  signal() {
    this.messageService.signalMessage(this.message.id).subscribe();
  }


  showDanger(dangerTpl) {
    this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 1000 });
  }
}
