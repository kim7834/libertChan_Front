import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [NavbarComponent, HeaderComponent, FooterComponent],
  exports: [NavbarComponent, HeaderComponent],
  imports: [CommonModule, NavigationRoutingModule, HttpClientModule]
})
export class NavigationModule {}

