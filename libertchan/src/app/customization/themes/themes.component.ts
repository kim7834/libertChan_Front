import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';

import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Renderer2 } from '@angular/core';

import { ThemeService } from '../../services/theme.service';
import { LocalstorageService } from '../../services/localstorage.service';

interface UserPreferences {
  theme: string;
}

/**
 * La sauvegarde de fait via le service LocalstorageService
 * Le chargement se fait ici getPreference()
 */

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

  themeSelected: any;

  userPreferences = {
    theme: this.themeSelected
  };

  options = [{ name: 'Défault' }, { name: 'HotPink' }];

  changeTheme(themeSelected) {
    console.log('themeSelected ', themeSelected);

    this.userPreferences.theme = themeSelected;

    this.localstorageService.savePreference(this.userPreferences);

    // this.themeService.setTheme(this.themeSelected);
    // this.savePreference();
  }

  // TODO: remove if service ok
  // savePreference() {
  //   this.storage
  //     .set('userPreferences', this.userPreferences)
  //     .subscribe(() => {});
  //   console.log('saved ', this.userPreferences.theme);
  // }

  getPreference() {
    this.storage
      .get('userPreferences')
      .subscribe((preference: UserPreferences) => {
        // Save default preference on first visit
        console.log('preference AVANT', preference);
        if (preference === undefined) {
          this.themeSelected = 'Défault';
          this.changeTheme(this.themeSelected);
        }
        // * Defini le theme @Service en fonction du LocalStorage
        this.themeService.setTheme(preference.theme);
        console.log('theme -> service : ', preference.theme);

        this.themeSelected = preference.theme;
      });
  }

  ngOnInit() {
    // this.getPreference();
    // console.log('--- ',  this.themeSelected);

    this.localstorageService.preference.subscribe(preference => {
      console.log('pref ', preference);
      // TODO if undefined
      if (preference === undefined) {
        this.themeSelected = 'Défault';
      }
      // TODO: save la variable en localstorage
      this.localstorageService.savePreference(this.themeSelected);
    });
  }

  themeHotPink(theme: string): void {
    const bodyElement = this.renderer.selectRootElement('body', true);
    bodyElement.classList.add(theme);
    const navElement = this.renderer.selectRootElement('.navBarApp', true);
    navElement.classList.add(theme);
    const modalHeaderElement = this.renderer.selectRootElement(
      '.ui-modal-header',
      true
    );
    modalHeaderElement.classList.add(theme);
    const modalCreateBtnElement = this.renderer.selectRootElement(
      '.createBtnSpan',
      true
    );
    modalCreateBtnElement.classList.add(theme);
    const headerImgElement = this.renderer.selectRootElement(
      '.headerImg',
      true
    );
    headerImgElement.classList.add(theme);
    // const catalogDetailHoverElement = this.renderer.selectRootElement('.appTopicDetail', true);
    // catalogDetailHoverElement.classList.remove('defaultTheme');
    // catalogDetailHoverElement.classList.add('themeHotPink');
  }

  the() {
    // this.localstorageService.getPreference();
    // console.log(this.localstorageService.getPreference());
    this.themeService.fanto();
  }

  // goti() {
  //   this.themeService.getTheme();
  // }
}
