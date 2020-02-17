import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() textContent: string;
  @Input() imageLocation: string;

  constructor() {}

  ngOnInit() {}

  getTextContent() {
    this.textContent = this.textContent.replace('<lien>', '<a href="');
    this.textContent = this.textContent.replace(
      '</lien>',
      '" target="_blank">lien</a>'
    );

    //console.log(this.textContent.split('\n'));
    return this.textContent.split('\n');
  }
}
