import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModalModule as ngModalT } from 'ng-modal-lib';
import { MarkdownModule } from 'ngx-markdown';
import { ModalRoutingModule } from './modal-routing.module';

import { PanelModalCreateThreadComponent } from './ng-modal/panelModalCreateThread.component';
import { PanelModalInfoMarkdownComponent } from './ng-modal/panelModalInfosMarkdown.component';
import { PanelModalMessageComponent } from './ng-modal/panelModalMessage.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbToastComponent } from './toasts/ngb-toast/ngb-toast.component';
import { ToastsContainerComponent } from './toasts/toasts-container.component';

@NgModule({
  declarations: [
    PanelModalCreateThreadComponent,
    PanelModalMessageComponent,
    PanelModalInfoMarkdownComponent,
    ToastsContainerComponent,
    NgbToastComponent
  ],
  exports: [
    CommonModule,
    PanelModalCreateThreadComponent,
    PanelModalMessageComponent,
    PanelModalInfoMarkdownComponent,
    NgbToastComponent
  ],
  bootstrap: [NgbToastComponent],
  imports: [CommonModule, ModalRoutingModule, FormsModule, ReactiveFormsModule, ngModalT, NgbModule, MarkdownModule.forChild()]
})
export class ModalModule {}
