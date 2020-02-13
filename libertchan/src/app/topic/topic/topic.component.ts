import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Topic } from 'src/app/models/topic';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  topic: Topic;

  constructor(
    private route: ActivatedRoute,
    private topicService: TopicService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.topicService.getTopicById(p.id).subscribe(topic => {
        console.log(topic);
        this.topic = topic;
      });
    });
  }
}
