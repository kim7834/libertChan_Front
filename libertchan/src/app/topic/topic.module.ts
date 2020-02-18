import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicComponent } from './topic/topic.component';
import { MessageComponent } from './message/message.component';
import { NavigationModule } from '../navigation/navigation.module';
import { MessageModalComponent } from '../modal/message-modal/message-modal.component';

import { PanelModalMessageComponent } from '../modal/ng-modal/panelModalMessage.component';


@NgModule({
  declarations: [TopicComponent, MessageComponent, PanelModalMessageComponent],
  imports: [CommonModule, NavigationModule],
  entryComponents: [MessageModalComponent]
})
export class TopicModule {}
