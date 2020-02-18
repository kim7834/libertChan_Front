import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalRoutingModule } from './modal-routing.module';
import { TopicModalComponent } from './topic-modal/topic-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageModalComponent } from './message-modal/message-modal.component';

// TODO: Requis pour ng-modal -> declaration + export
import { ModalModule as ngModalT } from 'ng-modal-lib';
import { PanelModalCreateThreadComponent } from './ng-modal/panelModalCreateThread.component';
import { PanelModalMessageComponent } from './ng-modal/panelModalMessage.component';


@NgModule({
  declarations: [TopicModalComponent, MessageModalComponent, PanelModalCreateThreadComponent, PanelModalMessageComponent],
  exports: [CommonModule, TopicModalComponent, PanelModalCreateThreadComponent, PanelModalMessageComponent],
  imports: [CommonModule, ModalRoutingModule, FormsModule, ReactiveFormsModule, ngModalT]
})
export class ModalModule {}
