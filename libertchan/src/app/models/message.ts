import { Image } from './image';
import { Topic } from './topic';

export class Message {
  date: Date;
  textContent: string;
  image: Image;

  constructor(textContent: string, image: Image) {
    this.textContent = textContent;
    this.image = image;
  }
}
