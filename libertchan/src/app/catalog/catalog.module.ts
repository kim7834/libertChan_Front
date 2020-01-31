import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogDetailComponent } from './catalog-detail/catalog-detail.component';
import { HeaderComponent } from '../navigation/header/header.component';
import { NavbarComponent } from '../navigation/navbar/navbar.component';
import { NavigationModule } from '../navigation/navigation.module';

@NgModule({
  declarations: [CatalogDetailComponent],
  imports: [CommonModule, CatalogRoutingModule, NavigationModule]
})
export class CatalogModule {}