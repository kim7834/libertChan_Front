import { Message } from './message';
import { Channel } from './channel';

export class Topic {
  id: number;
  date: Date;
  subject: string;
  messages: Message[];
  channel: Channel;

  constructor(subject: string, messages: Message[]) {
    this.subject = subject;
    this.messages = messages;
  }
}
