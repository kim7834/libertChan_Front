import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Topic } from '../models/topic';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  private baseUrl = 'http://localhost:8080/api/discussionthreads';
  // private baseUrl = 'http://192.168.1.89:8080/api/discussionthreads';
  // private baseUrl = 'http://192.168.1.22:8080/api/discussionthreads';
  constructor(private httpClient: HttpClient) {}

  /*  get httpOptions(): { headers: HttpHeaders } {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return {
      headers
    };
  }*/

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    params: {}
  };

  createTopic(topic: Topic, channel: string) {
    // console.log(topic);
    return this.httpClient.post<Topic>(this.baseUrl, topic, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params: new HttpParams().set('channel', channel)
    });
  }

  getTopics(): Observable<Topic[]> {
    return this.httpClient.get<Topic[]>(this.baseUrl, this.httpOptions);
  }

  getTopicsByChannel(channel: string): Observable<Topic[]> {
    console.log(this.baseUrl + '/channel/' + channel);

    return this.httpClient.get<Topic[]>(
      this.baseUrl + '/channel/' + channel,
      this.httpOptions
    );
  }

  getTopicById(id: number) {
    return this.httpClient.get<Topic>(
      this.baseUrl + '/' + id,
      this.httpOptions
    );
  }
}
