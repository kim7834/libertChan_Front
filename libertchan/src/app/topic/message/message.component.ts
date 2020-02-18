import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() date: Date;
  formatedDate = moment(this.date).locale('fr').format('LLLL');
  @Input() author: string;
  @Input() imageLocation: string;
  @Input() textContent: string;

  showImg = false;

  constructor() {}

  // over($event) {
  //   const parent = $event.fromElement;
  //   let imgSrc = $event.srcElement.src;
  //   const duplicatedImage = document.createElement('div');
  //   duplicatedImage.className = 'duplicatedImgExpand';
  //   duplicatedImage.innerHTML = '<img src=' + imgSrc + '>';

  //   parent.appendChild(duplicatedImage);
  // }

  // removeIt(){
  // }


  ngOnInit() {
  }

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
