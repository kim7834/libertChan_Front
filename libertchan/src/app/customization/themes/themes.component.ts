import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';

import { ThemeService } from '../../services/theme.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface Option {
  name: string;
  prop: string;
}

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit {
  constructor(private storage: StorageMap, private fb: FormBuilder) {}

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
    this.storage.get('userPreferences').subscribe(preference => {
      // Save default preference on first visit
      console.log('preference AVANT', preference);
      if (preference === undefined) {
        this.themeSelected = 'Défault';
        this.changeTheme();
      }
      this.themeSelected = preference.theme;
      console.log('preference APRES ', preference.theme);
      // for (let entry of preference) {
      //   console.log('entry ', entry);
      // }
      // this.themeSelected = preference as string;
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
}
