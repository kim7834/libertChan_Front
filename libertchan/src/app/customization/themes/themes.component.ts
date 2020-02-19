import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';

import { ThemeService } from '../../services/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit {
  constructor(
    private storage: StorageMap,
  ) {}



  // themeSelected: string;
  themeSelected: string;

  // TODO: dans un service
  userPreferences = { themeSelected: this.themeSelected };

  options = [
    { name: 'Défault', value: 0 },
    { name: 'HotPink', value: 1 }
  ];



  changeTheme() {
    this.userPreferences.themeSelected = this.themeSelected;
  }

  savePreference() {
    this.changeTheme();
    // console.log('theme ', this.themeSelected);
    this.storage
      .set('userPreferences', this.userPreferences)
      .subscribe(() => {});
    // console.log('b', this.themesOption);
    // this.storage.set('themesOption', this.themesOption).subscribe(() => {});
  }
  getPreference() {
    this.storage.get('userPreferences').subscribe(preference => {
      // Save default preference on first visit
      if (preference === undefined) {
        this.themeSelected = 'Défault';
        this.savePreference();
      }
    });
  }

  ngOnInit() {
    this.getPreference();
  }
}
