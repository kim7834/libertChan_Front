import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { SignaledMessagesComponent } from './signaled-messages/signaled-messages.component';
import { TopicModule } from '../topic/topic.module';

@NgModule({
  declarations: [SignaledMessagesComponent],
  imports: [CommonModule, AdministrationRoutingModule, TopicModule]
})
export class AdministrationModule {}
