import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogDetailComponent } from './catalog-detail/catalog-detail.component';
import { NavigationModule } from '../navigation/navigation.module';
import { CatalogMosaicComponent } from './catalog-mosaic/catalog-mosaic.component';
import { ChannelMosaicComponent } from './catalog-mosaic/channel-mosaic/channel-mosaic.component';
import { VignetteComponent } from './catalog-mosaic/channelMosaic/vignette/vignette.component';
import { ModalModule } from '../modal/modal.module';

import { ChannelDetailComponent } from './catalogDetail/channel-detail/channel-detail.component';
import { TopicDetailComponent } from './catalogDetail/channelDetail/topic-detail/topic-detail.component';

@NgModule({
  declarations: [
    CatalogDetailComponent,
    CatalogMosaicComponent,
    ChannelMosaicComponent,
    VignetteComponent,
    ChannelDetailComponent,
    TopicDetailComponent,
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    NavigationModule,
    ModalModule,
  ]
})
export class CatalogModule {}
