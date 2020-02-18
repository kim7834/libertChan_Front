import { Component, OnInit } from '@angular/core';
import { Topic } from 'src/app/models/topic';
import { ActivatedRoute } from '@angular/router';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-channel-detail',
  templateUrl: './channel-detail.component.html',
  styleUrls: ['./channel-detail.component.scss']
})
export class ChannelDetailComponent implements OnInit {
  topics: Topic[];
  currentChannel: string;

  constructor(
    private topicService: TopicService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.currentChannel = p.shortName;
      this.topicService
        .getTopicsByChannel(this.currentChannel)
        .subscribe(topics => {
          this.topics = topics;
          //console.log(topics);
        });
    });
  }
}
