import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }


  private someClassSource = new Subject<string>();

  someClass$ = this.someClassSource.asObservable();

  changeClass(laClass) {
    this.someClassSource.next(laClass);
  }
  // changeClass(class) {
  //   this.someClassSource.next(class);
  // }

}
