import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  private baseUrl = 'http://localhost:8080/api/channels';

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
