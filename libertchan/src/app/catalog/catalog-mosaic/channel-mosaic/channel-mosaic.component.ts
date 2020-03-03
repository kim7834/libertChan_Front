import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Topic } from 'src/app/models/topic';
import { TopicService } from 'src/app/services/topic.service';



@Component({
  selector: 'app-channel-mosaic',
  templateUrl: './channel-mosaic.component.html',
  styleUrls: ['./channel-mosaic.component.scss']
})
export class ChannelMosaicComponent implements OnInit {
  nbVignettes = 48;
  topics: Topic[];
  currentChannel: string;
  dateNow: Date = new Date();

  constructor(
    private topicService: TopicService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.currentChannel = p.shortName;
    });
    this.topicService
      .getTopicsByChannel(this.currentChannel)
      .subscribe(topics => {
        this.topics = topics;
      });
  }
}
