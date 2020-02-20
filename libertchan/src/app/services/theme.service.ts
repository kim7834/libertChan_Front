import { Injectable } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { BehaviorSubject } from 'rxjs';

interface UserPreferences {
  theme: string;
}


@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // theme: any;

  // theme: 'HotPink';
// HotPink
// Défault


// !
// TODO: change valeur par défaut -> from LocalStorage
private theme = new BehaviorSubject('Défault');
currentTheme = this.theme.asObservable();

setTheme(theme: string) {
  this.theme.next(theme);
}
// !




  // setTheme(theme) {
  //   this.theme = theme;
  //   // console.log('DANS SERVICE SET : ', theme);
  // }

  getTheme() {
    // console.log('DANS SERVICE GETTER : ', this.theme);
    return this.theme.value;
  }

  constructor(
    private storage: StorageMap,
  ) { }




}
