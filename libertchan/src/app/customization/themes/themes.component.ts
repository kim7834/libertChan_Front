import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StorageMap } from '@ngx-pwa/local-storage';

import { LocalstorageService } from 'src/app/services/localstorage.service';
import { ThemeService } from 'src/app/services/theme.service';

import { UserPreferences } from 'src/app/models/user-preferences';


@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit {
  constructor(
    private storage: StorageMap,
    private fb: FormBuilder,
    private renderer: Renderer2,
    private themeService: ThemeService,
    private localstorageService: LocalstorageService
  ) {}

  userPreferences = new UserPreferences();

  themes = [
    { name: 'Défault' },
    { name: 'HotPink' }
  ];

  changeTheme(themeSelected) {
    console.log('themeSelected ', themeSelected);
    console.log('this.userPreferences.theme ', this.userPreferences.theme);

    this.userPreferences.theme = themeSelected;

    this.localstorageService.savePreference(this.userPreferences);

  }


  ngOnInit() {
    this.localstorageService.preference.subscribe((preference: UserPreferences) => {
      console.log('Loading pref ', preference);
      if (preference === undefined) {
        preference = { theme: 'Défault' };
        this.localstorageService.savePreference(preference);
      }
      this.userPreferences = preference;
    });
  }

  themeHotPink(theme: string): void {
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

  the() {
    // this.localstorageService.getPreference();
    // console.log(this.localstorageService.getPreference());
    // this.themeService.fanto();
  }

  // goti() {
  //   this.themeService.getTheme();
  // }



}
