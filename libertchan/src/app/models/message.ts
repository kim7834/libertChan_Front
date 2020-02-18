import { Image } from './image';
import { Topic } from './topic';

export class Message {
  date: Date;
  textContent: string;
  image: Image;
  author: string;
  postNumber: number;


  constructor(author: string, textContent: string, image: Image) {
    this.author = author;
    this.textContent = textContent;
    this.image = image;
  }
}
