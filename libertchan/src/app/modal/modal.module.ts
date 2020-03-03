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
import { PanelModalInfoMarkdownComponent } from './ng-modal/panelModalInfosMarkdown.component';

import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  declarations: [
    TopicModalComponent,
    MessageModalComponent,
    PanelModalCreateThreadComponent,
    PanelModalMessageComponent,
    PanelModalInfoMarkdownComponent
  ],
  exports: [
    CommonModule,
    TopicModalComponent,
    PanelModalCreateThreadComponent,
    PanelModalMessageComponent,
    PanelModalInfoMarkdownComponent
  ],
  imports: [CommonModule, ModalRoutingModule, FormsModule, ReactiveFormsModule, ngModalT, MarkdownModule.forChild()]
})
export class ModalModule {}
