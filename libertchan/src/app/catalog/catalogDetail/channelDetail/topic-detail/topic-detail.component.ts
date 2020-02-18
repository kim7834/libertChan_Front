import { Component, OnInit, Input } from '@angular/core';
import { Topic } from 'src/app/models/topic';

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.scss']
})
export class TopicDetailComponent implements OnInit {
  @Input() topic: Topic;
  @Input() currentChannel: string;
  constructor() {}

  ngOnInit(): void {}

  transformTextContent(textContent) {
    textContent = textContent.replace('<lien>', '<a href="');
    textContent = textContent.replace('</lien>', '" target="_blank">lien</a>');

    //console.log(this.textContent.split('\n'));
    return textContent.split('\n');
  }
}
