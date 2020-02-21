import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitationService {
  citation = new Rx.ReplaySubject(1);

  constructor() {}
}
