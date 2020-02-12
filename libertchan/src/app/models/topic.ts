import { Message } from './message';

export class Topic {
  subject: string;
  messages: Message[];

  constructor(subject: string, messages: Message[]) {
    this.subject = subject;
    this.messages = messages;
  }
}
