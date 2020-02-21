import { Injectable } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserPreferences } from '../models/user-preferences';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  constructor(private storage: StorageMap) {}

  themeSelected: any;

  userPreferences = {
    theme: this.themeSelected
  };

  savePreference(data: UserPreferences): Observable<void> {
    console.log(data);
    return this.storage.set('userPreferences', data);
  }

  get preference(): Observable<UserPreferences> {
    return this.storage
    .get('userPreferences').pipe(
      map((pref: UserPreferences) => {
        if(pref) {
          return new UserPreferences(pref);
        }
        return null;
      })
    );
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
