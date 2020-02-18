import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vignette',
  templateUrl: './vignette.component.html',
  styleUrls: ['./vignette.component.scss']
})
export class VignetteComponent implements OnInit {
  @Input() title: string;
  @Input() imageLink: string;
  @Input() topicId: number;
  @Input() channelName: string;
  @Input() author: string;

  constructor() {}

  ngOnInit() {}
}
