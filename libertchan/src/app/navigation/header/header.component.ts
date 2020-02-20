import { Component, OnInit, Renderer2 } from '@angular/core';
import { ChannelService } from '../../services/channel.service';
import { Channel } from 'src/app/models/channel';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

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
    const imgElement = this.renderer.selectRootElement('.headerImg', true);
    // bodyElement.classList.add('themeHotPink');
    console.log('imgElement ', imgElement);

    console.log('VERIF : ', imgElement.classList.contains('headerImg'));

    if ( imgElement.classList.contains('headerImg') ) {
      this.imgSource = '../../../assets/images/logo/bird.png';
    }
    if ( imgElement.classList.contains('themeHotPink') ) {
      this.imgSource = '../../../assets/images/logo/bird_hotpink.png';
    }

  }


}
