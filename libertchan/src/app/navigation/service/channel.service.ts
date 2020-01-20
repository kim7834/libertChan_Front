import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  private baseUrl = 'http://localhost:8080/channels';


  constructor(private httpClient: HttpClient) { }

  get httpOptions(): { headers: HttpHeaders } {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return {
      headers
    };
  }

getChannelList() {
  return this.httpClient
    // .get(this.baseUrl, this.httpOptions);
    .get(this.baseUrl);
}


}
