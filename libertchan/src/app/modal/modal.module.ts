import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalRoutingModule } from './modal-routing.module';
import { TopicModalComponent } from './topic-modal/topic-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TopicModalComponent],
  exports: [CommonModule, TopicModalComponent],
  imports: [CommonModule, ModalRoutingModule, FormsModule, ReactiveFormsModule]
})
export class ModalModule {}
