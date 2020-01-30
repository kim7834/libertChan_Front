import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedChannelService {
  channelShortName: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() {}

  update(channelCode: string) {
    this.channelShortName.next(channelCode);
  }
}
