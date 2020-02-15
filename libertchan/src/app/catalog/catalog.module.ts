import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogDetailComponent } from './catalog-detail/catalog-detail.component';
import { NavigationModule } from '../navigation/navigation.module';
import { CatalogMosaicComponent } from './catalog-mosaic/catalog-mosaic.component';
import { ChannelMosaicComponent } from './catalog-mosaic/channel-mosaic/channel-mosaic.component';
import { VignetteComponent } from './catalog-mosaic/channelMosaic/vignette/vignette.component';
import { ModalModule } from '../modal/modal.module';
import { TopicModalComponent } from '../modal/topic-modal/topic-modal.component';

@NgModule({
  declarations: [
    CatalogDetailComponent,
    CatalogMosaicComponent,
    ChannelMosaicComponent,
    VignetteComponent,
  ],
  entryComponents: [TopicModalComponent],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    NavigationModule,
    ModalModule,
    NgbModule,
  ]
})
export class CatalogModule {}
