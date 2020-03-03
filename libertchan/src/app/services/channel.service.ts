import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

// import * as nameOfJson from '../../../../urlconfig.json';

// var jsonUrl = require('../../../../urlconfig.json');

// import data from '../../../../urlconfig.json';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
   //private baseUrl = 'http://localhost:8080/api/channels';
  private baseUrl = 'http://192.168.1.89:8080/api/channels';
  // private baseUrl = 'http://192.168.1.22:8080/api/channels';

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
