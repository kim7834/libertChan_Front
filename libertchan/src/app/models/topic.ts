import { Message } from './message';
import { Image } from './image';

export class Topic {
  subject: string;
  messages: Message[];
  id: number;

  constructor(subject: string, messages: Message[]) {
    this.subject = subject;
    this.messages = messages;
  }
}
