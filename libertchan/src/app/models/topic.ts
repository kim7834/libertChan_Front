import { Message } from './message';
import { Image } from './image';

export class Topic {
  id: number;
  date: Date;
  subject: string;
  messages: Message[];

  constructor(date: Date, subject: string, messages: Message[]) {
  // constructor(subject: string, messages: Message[]) {
    this.date = date;
    this.subject = subject;
    this.messages = messages;
  }
}
