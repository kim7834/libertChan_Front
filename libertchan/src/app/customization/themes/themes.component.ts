import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';

import { ThemeService } from '../../services/theme.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Renderer2 } from '@angular/core';



interface Option {
  name: string;
  // prop: string;
}
interface UserPreferences {
  theme: string;
}

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit {
  constructor(
    private storage: StorageMap,
    private fb: FormBuilder,
    private renderer: Renderer2
    ) {}

  // themeSelected: string;
  themeSelected: any;
  // options: FormGroup;

  userPreferences = {
    theme: this.themeSelected
  };

  options = [
    { name: 'Défault' },
    { name: 'HotPink' }
  ];

  changeTheme() {
    this.userPreferences.theme = this.themeSelected;
    this.savePreference();
  }

  savePreference() {
    this.storage
      .set('userPreferences', this.userPreferences)
      .subscribe(() => {});
    console.log('saved ', this.userPreferences.theme);
  }

  // getIt() {
  //   this.storage.get('userPreferences').map(
  //     (response) => { return response.json()}
  //   );
  // }

  getPreference() {
    this.storage.get('userPreferences').subscribe((preference: UserPreferences) => {
      // Save default preference on first visit
      console.log('preference AVANT', preference);
      if (preference === undefined) {
        this.themeSelected = 'Défault';
        this.changeTheme();
      }
      this.themeSelected = preference.theme;
      // console.log('preference APRES ', preference.theme);

    });
    // this.themeHotPink(this.themeSelected);
  }

  ngOnInit() {
    this.getPreference();



  }


  themeHotPink(theme:string): void {
    const bodyElement = this.renderer.selectRootElement('body', true);
    bodyElement.classList.add(theme);
    const navElement = this.renderer.selectRootElement('.navBarApp', true);
    navElement.classList.add(theme);
    const modalHeaderElement = this.renderer.selectRootElement('.ui-modal-header', true);
    modalHeaderElement.classList.add(theme);
    const modalCreateBtnElement = this.renderer.selectRootElement('.createBtnSpan', true);
    modalCreateBtnElement.classList.add(theme);
    const headerImgElement = this.renderer.selectRootElement('.headerImg', true);
    headerImgElement.classList.add(theme);
    // const catalogDetailHoverElement = this.renderer.selectRootElement('.appTopicDetail', true);
    // catalogDetailHoverElement.classList.remove('defaultTheme');
    // catalogDetailHoverElement.classList.add('themeHotPink');
  }
}
