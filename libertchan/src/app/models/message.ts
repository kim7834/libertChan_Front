import { Image } from './image';

export class Message {
  textContent: string;
  image: Image;

  constructor(textContent: string, image: Image) {
    this.textContent = textContent;
    this.image = image;
  }
}
