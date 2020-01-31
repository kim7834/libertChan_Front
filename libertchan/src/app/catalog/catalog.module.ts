import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogDetailComponent } from './catalog-detail/catalog-detail.component';
import { HeaderComponent } from '../navigation/header/header.component';
import { NavbarComponent } from '../navigation/navbar/navbar.component';
import { NavigationModule } from '../navigation/navigation.module';
import { CatalogMosaicComponent } from './catalog-mosaic/catalog-mosaic.component';
import { ChannelMosaicComponent } from './catalog-mosaic/channel-mosaic/channel-mosaic.component';
import { VignetteComponent } from './catalog-mosaic/channelMosaic/vignette/vignette.component';

@NgModule({
  declarations: [CatalogDetailComponent, CatalogMosaicComponent, ChannelMosaicComponent, VignetteComponent],
  imports: [CommonModule, CatalogRoutingModule, NavigationModule]
})
export class CatalogModule {}
