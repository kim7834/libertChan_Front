export class Channel {
  name: string;
  shortName: string;
  messageMaxByThread: number;
  maxTimeWithoutPost: number;
  isPublic: boolean;
  isModerated: boolean;
  shortDescription: string;
  category: string;

  constructor(
    name: string,
    shortName: string,
    messageMaxByThread: number,
    maxTimeWithoutPost: number,
    isPublic: boolean,
    isModerated: boolean,
    shortDescription: string,
    category: string
  ) {
    this.name = name;
    this.shortName = shortName;
    this.messageMaxByThread = messageMaxByThread;
    this.maxTimeWithoutPost = maxTimeWithoutPost;
    this.isPublic = isPublic;
    this.isModerated = isModerated;
    this.shortDescription = shortDescription;
    this.category = category;
  }
}
