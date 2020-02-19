import { Component, OnInit } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';



@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit {

  constructor(
    private storage: StorageMap
  ) { }

  themeSelected = 'Défault';

// TODO: dans un service
  userPreferences = { themeSelected: this.themeSelected };

  options = [
    { name: 'Défault', value: 0 },
    { name: 'HotPink', value: 1 }
  ];

  savePreference() {
    // console.log('a', this.userPreference);
    this.storage.set('userPreferences', this.userPreferences).subscribe(() => {});
    // console.log('b', this.themesOption);
    // this.storage.set('themesOption', this.themesOption).subscribe(() => {});
  }
  getPreference() {
    this.storage.get('userPreferences').subscribe((preference) => {
      if (preference === undefined) {
        // Save default preference on first visit
        this.savePreference();
      }
    });
  }


  ngOnInit() {
    this.getPreference();
  }


}
