import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalRoutingModule } from './modal-routing.module';
import { TopicModalComponent } from './topic-modal/topic-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageModalComponent } from './message-modal/message-modal.component';

// TODO: Requis pour ng-modal -> decalration + export
import { ModalModule as ngModalT } from 'ng-modal-lib';
import { ModalDemoComponent } from './ng-modal-t/modal-demo.component';
import { PanelDemoComponent } from './ng-modal-t/panel-demo.component';


@NgModule({
  declarations: [TopicModalComponent, MessageModalComponent, ModalDemoComponent, PanelDemoComponent],
  exports: [CommonModule, TopicModalComponent, ModalDemoComponent, PanelDemoComponent],
  imports: [CommonModule, ModalRoutingModule, FormsModule, ReactiveFormsModule, ngModalT]
})
export class ModalModule {}
