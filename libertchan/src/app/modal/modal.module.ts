import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalRoutingModule } from './modal-routing.module';
import { TopicModalComponent } from './topic-modal/topic-modal.component';

@NgModule({
  declarations: [TopicModalComponent],
  exports: [CommonModule, TopicModalComponent],
  imports: [CommonModule, ModalRoutingModule]
})
export class ModalModule {}
