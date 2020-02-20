import { Injectable } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';

interface UserPreferences {
  theme: string;
}

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  constructor(private storage: StorageMap) {}

  themeSelected: any;

  userPreferences = {
    theme: this.themeSelected
  };

  savePreference(data) {
    this.storage
      .set('userPreferences', data)
      .subscribe(() => {});
    console.log('Service -> Saved ', data.theme);
  }

  getPreference() {
    this.storage
      .get('userPreferences')
      .subscribe((preference: UserPreferences) => {
        // Save default preference on first visit
        console.log('SERVICE preference AVANT', preference);
        if (preference === undefined) {
          this.themeSelected = 'Défault';
        }
        return preference;
      });
  }
  /**
   * Ne fonctionne pas -< return 'undefined'
   */
  // getTheme() {
  //   let thema;
  //   this.storage
  //     .get('userPreferences')
  //     .subscribe((preference: UserPreferences) => {
  //       // Save default preference on first visit
  //       console.log('SERVICE preference AVANT', preference.theme);
  //       if (preference.theme === undefined) {
  //         this.themeSelected = 'Défault';
  //       }
  //       thema = preference.theme;
  //     });
  //   console.log('thema ', thema);
  //   return thema;
  // }
}
