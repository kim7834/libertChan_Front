import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { CustomizationModule } from '../customization/customization.module';
import { CatalogSwitchComponent } from './catalog-switch/catalog-switch.component';

import { UiSwitchModule } from 'ngx-ui-switch';


@NgModule({
  declarations: [NavbarComponent, HeaderComponent, FooterComponent, CatalogSwitchComponent],
  exports: [NavbarComponent, HeaderComponent, FooterComponent, CatalogSwitchComponent],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    HttpClientModule,
    CustomizationModule,
    UiSwitchModule
    // UiSwitchModule.forRoot({
    //   size: 'small',
    //   color: 'rgb(0, 189, 99)',
    //   switchColor: '#80FFA2',
    //   defaultBgColor: '#00ACFF',
    //   defaultBoColor : '#476EFF',
    //   checkedLabel: 'on',
    //   uncheckedLabel: 'off'
    // })
  ]
})
export class NavigationModule {}

