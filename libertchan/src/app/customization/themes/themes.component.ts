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
  }

  ngOnInit() {
    // this.themeSelected = 'Défault';

    // this.themeSelected = this.getPreference();
    this.getPreference();
    // this.themeSelected = this.getPreference();
    // console.log('init ' , this.themeSelected );

    // this.options = this.fb.group({
    //   options: [null, Validators.required]
    // });

    // const toSelect = this.options.find(c => c.name === 'HotPink');
    // toSelect.get('themeSelected').setValue(toSelect);
    // this.themeSelected.setValue('HotPink');


  }


  themeHotPink(): void {
    const bodyElement = this.renderer.selectRootElement('body', true);
    bodyElement.classList.add('themeHotPink');
    const navElement = this.renderer.selectRootElement('.navBarApp', true);
    navElement.classList.add('themeHotPink');
    const modalHeaderElement = this.renderer.selectRootElement('.ui-modal-header', true);
    modalHeaderElement.classList.add('themeHotPink');
    const modalCreateBtnElement = this.renderer.selectRootElement('.createBtnSpan', true);
    modalCreateBtnElement.classList.add('themeHotPink');
    const headerImgElement = this.renderer.selectRootElement('.headerImg', true);
    headerImgElement.classList.add('themeHotPink');
    // const catalogDetailHoverElement = this.renderer.selectRootElement('.appTopicDetail', true);
    // catalogDetailHoverElement.classList.remove('defaultTheme');
    // catalogDetailHoverElement.classList.add('themeHotPink');
  }
}
