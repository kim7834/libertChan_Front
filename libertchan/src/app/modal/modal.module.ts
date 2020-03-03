import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModalModule as ngModalT } from 'ng-modal-lib';
import { MarkdownModule } from 'ngx-markdown';
import { ModalRoutingModule } from './modal-routing.module';

import { PanelModalCreateThreadComponent } from './ng-modal/panelModalCreateThread.component';
import { PanelModalInfoMarkdownComponent } from './ng-modal/panelModalInfosMarkdown.component';
import { PanelModalMessageComponent } from './ng-modal/panelModalMessage.component';





@NgModule({
  declarations: [
    PanelModalCreateThreadComponent,
    PanelModalMessageComponent,
    PanelModalInfoMarkdownComponent
  ],
  exports: [
    CommonModule,
    PanelModalCreateThreadComponent,
    PanelModalMessageComponent,
    PanelModalInfoMarkdownComponent
  ],
  imports: [CommonModule, ModalRoutingModule, FormsModule, ReactiveFormsModule, ngModalT, MarkdownModule.forChild()]
})
export class ModalModule {}
