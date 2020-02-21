import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { CustomizationModule } from '../customization/customization.module';


@NgModule({
  declarations: [NavbarComponent, HeaderComponent, FooterComponent],
  exports: [NavbarComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    HttpClientModule,
    CustomizationModule
  ]
})
export class NavigationModule {}

