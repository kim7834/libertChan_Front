import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Topic } from '../models/topic';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private baseUrl = 'http://localhost:8080/api/topics';

  constructor(private httpClient: HttpClient) {}

  get httpOptions(): { headers: HttpHeaders } {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return {
      headers
    };
  }

  getChannels() {
    return this.httpClient.get(this.baseUrl, this.httpOptions);
    // .get(this.baseUrl);
  }

  getChannelByShortName(shortName: string) {
    return this.httpClient.get(
      this.baseUrl + '/' + shortName,
      this.httpOptions
    );
  }

}
