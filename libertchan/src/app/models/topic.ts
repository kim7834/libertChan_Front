import { Message } from './message';

export class Topic {
  id: number;
  date: Date;
  subject: string;
  messages: Message[];

  constructor(subject: string, messages: Message[]) {
    this.subject = subject;
    this.messages = messages;
  }
}
