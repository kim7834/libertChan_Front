import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicComponent } from './topic/topic.component';
import { MessageComponent } from './message/message.component';
import { NavigationModule } from '../navigation/navigation.module';
import { MessageModalComponent } from '../modal/message-modal/message-modal.component';
import { ModalModule } from '../modal/modal.module';

import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [TopicComponent, MessageComponent],
  exports: [MessageComponent],
  imports: [
    CommonModule,
    NavigationModule,
    ModalModule,
    MarkdownModule.forRoot()
  ],
  entryComponents: [MessageModalComponent]
})
export class TopicModule {}
