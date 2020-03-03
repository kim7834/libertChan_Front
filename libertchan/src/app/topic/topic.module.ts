import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicComponent } from './topic/topic.component';
import { MessageComponent } from './message/message.component';
import { NavigationModule } from '../navigation/navigation.module';
import { ModalModule } from '../modal/modal.module';

import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [TopicComponent, MessageComponent],
  imports: [
    CommonModule,
    NavigationModule,
    ModalModule,
    MarkdownModule.forRoot(),
  ],
})
export class TopicModule {}
