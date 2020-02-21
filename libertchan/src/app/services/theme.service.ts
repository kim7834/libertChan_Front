import { Injectable } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { BehaviorSubject } from 'rxjs';
import { LocalstorageService } from './localstorage.service';

interface UserPreferences {
  theme: string;
}

/**
 * Tentative d'utilisation d'un behaviorSubject afin de transmettre le theme a tout les composant
 * -> pas trouvé pour définir la valeur par défaut par localstorage
 */

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // theme: any;

  // theme: 'HotPink';

  // HotPink
  // Défault

  constructor(
    private storage: StorageMap,
    private localstorageService: LocalstorageService
  ) {}

  // !
  // TODO: change valeur par défaut -> from LocalStorage
  // private theme = new BehaviorSubject('Défault');
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
}
