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
}
