import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [NavbarComponent, HeaderComponent],
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
