import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicComponent } from './topic/topic.component';
import { MessageComponent } from './message/message.component';
import { NavigationModule } from '../navigation/navigation.module';

@NgModule({
  declarations: [TopicComponent, MessageComponent],
  imports: [CommonModule, NavigationModule]
})
export class TopicModule {}
