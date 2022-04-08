import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  counter = 0;

  constructor() { }

  increase() {
    this.counter++;
  }
}
