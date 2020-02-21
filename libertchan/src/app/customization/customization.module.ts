import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesComponent } from './themes/themes.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ThemesComponent],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    ThemesComponent,
  ]
})
export class CustomizationModule { }
