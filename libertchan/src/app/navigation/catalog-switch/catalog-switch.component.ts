import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-catalog-switch',
  templateUrl: './catalog-switch.component.html',
  styleUrls: ['./catalog-switch.component.scss']
})
export class CatalogSwitchComponent implements OnInit {
  isUrlAtMosaic: boolean;
  urlShortname: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ) {}


  ngOnInit(): void {
    this.isUrlAtMosaic = this.isUrlMosaic();
    this.urlShortname = this.activatedRoute.snapshot.paramMap.get('shortName');
  }

  changepage() {
    if (!this.isUrlAtMosaic) {
      this.router.navigate(['chan/' + this.urlShortname ]);
    } else {
      this.router.navigate(['chan/' + this.urlShortname + '/mosaic']);
    }
  }

  isUrlMosaic(): boolean {
    if (this.router.url.includes('mosaic')) {
      return true;
    } else {
      return false;
    }
  }



}
