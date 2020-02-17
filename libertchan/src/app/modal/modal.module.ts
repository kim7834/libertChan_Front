import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalRoutingModule } from './modal-routing.module';
import { TopicModalComponent } from './topic-modal/topic-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageModalComponent } from './message-modal/message-modal.component';

// TODO: Requis pour ng-modal -> decalration + export
import { ModalModule as ngModalT } from 'ng-modal-lib';
import { PanelModalComponent } from './ng-modal/panelModal.component';


@NgModule({
  declarations: [TopicModalComponent, MessageModalComponent, PanelModalComponent],
  exports: [CommonModule, TopicModalComponent, PanelModalComponent],
  imports: [CommonModule, ModalRoutingModule, FormsModule, ReactiveFormsModule, ngModalT]
})
export class ModalModule {}
