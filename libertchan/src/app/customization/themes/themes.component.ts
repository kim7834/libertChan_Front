import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StorageMap } from '@ngx-pwa/local-storage';

import { LocalstorageService } from 'src/app/services/localstorage.service';
import { ThemeService } from 'src/app/services/theme.service';

import { UserPreferences } from 'src/app/models/user-preferences';
import { Observable, of } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';
import { untilDestroyed } from 'ngx-take-until-destroy';


@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit, OnDestroy {
  constructor(
    private storage: StorageMap,
    private fb: FormBuilder,
    private renderer: Renderer2,
    private themeService: ThemeService,
    private localstorageService: LocalstorageService
  ) {}

  userPreferences$: Observable<UserPreferences>;
  userPreferences: UserPreferences;

  themes = [
    new UserPreferences({ name: 'default', label: 'Défault' }),
    new UserPreferences({ name: 'hotpink', label: 'HotPink' })
  ];

  changeTheme() {

    this.localstorageService.savePreference(this.userPreferences)
    .pipe(untilDestroyed(this))
    .subscribe();

    this.themeHotPink(this.userPreferences);

  }


  ngOnInit() {

    this.userPreferences$ = this.localstorageService.preference.pipe(
      switchMap((preference) => {
        if (!preference) {
          preference = this.themes[0];
          return this.localstorageService.savePreference(preference).pipe(
            map(() => preference)
          );
        }
        return of(preference);
      }),
      tap(pref => {
        this.userPreferences = this.themes.find(t => t.name === pref.name);
      }),
      tap(() => this.themeHotPink(this.userPreferences)),
    );
  }

  ngOnDestroy(): void{
  }

  themeHotPink(pref: UserPreferences): void {
    const bodyElement = this.renderer.selectRootElement('body', true);
    bodyElement.className = '';
    bodyElement.classList.add(pref.name);
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
