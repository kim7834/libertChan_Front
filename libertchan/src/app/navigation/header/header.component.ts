import { Component, OnInit, Renderer2, AfterContentInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ChannelService } from '../../services/channel.service';
import { Channel } from 'src/app/models/channel';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {



  constructor(
    private channelService: ChannelService,
    private route: ActivatedRoute,
    private renderer: Renderer2,
    private themeService: ThemeService
  ) {}

  currentChannel: Channel;
  imgSource: string;
  // imgSource = '../../../assets/images/logo/bird.png';



  ngOnInit() {
    this.route.params.subscribe(params => {
      this.channelService
        .getChannelByShortName(params.shortName)
        .subscribe(response => {
          this.currentChannel = response as Channel;
        });
    });

    // TODO: Theme
    // const imgElement = this.renderer.selectRootElement('.headerImg', true);
    // if ( imgElement.classList.contains('headerImg') ) {
    //   this.imgSource = '../../../assets/images/logo/bird.png';
    // }
    // if ( imgElement.classList.contains('themeHotPink') ) {
    //   this.imgSource = '../../../assets/images/logo/bird_hotpink.png';
    // }

    // console.log('INI HEADER STATE : ', this.themeService.getTheme());


    if (this.themeService.getTheme() === 'Défault') {
      this.imgSource = '../../../assets/images/logo/bird.png';
    } else if (this.themeService.getTheme() === 'HotPink') {
      this.imgSource = '../../../assets/images/logo/bird_hotpink.png';
    }

  }

  // console.log('SERVICE AT HEADER : ', this.themeService.getTheme());



}
