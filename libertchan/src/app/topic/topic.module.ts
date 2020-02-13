import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicComponent } from './topic/topic.component';
import { MessageComponent } from './message/message.component';



@NgModule({
  declarations: [TopicComponent, MessageComponent],
  imports: [
    CommonModule
  ]
})
export class TopicModule { }
