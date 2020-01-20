export class Channel {
  name: string;
  shortName: string;
  messageMaxByThread: number;
  maxTimeWithoutPost: number;

  constructor(
    name: string,
    shortName: string,
    messageMaxByThread: number,
    maxTimeWithoutPost: number
  ) {
    this.name = name;
    this.shortName = shortName;
    this.messageMaxByThread = messageMaxByThread;
    this.maxTimeWithoutPost = maxTimeWithoutPost;
  }
}
