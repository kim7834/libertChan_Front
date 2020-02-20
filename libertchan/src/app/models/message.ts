import { Image } from './image';
import { Topic } from './topic';

export class Message {
  date: Date;
  textContent: string;
  image: Image;
  author: string;
  id: number;
  // tslint:disable-next-line: variable-name
  discussionThread: Topic;

  constructor(author: string, textContent: string, image: Image) {
    this.author = author;
    this.textContent = textContent;
    this.image = image;
  }
}
