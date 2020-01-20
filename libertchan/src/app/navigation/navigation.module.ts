import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [NavbarComponent],
  exports : [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    HttpClientModule
  ]
})
export class NavigationModule { }
