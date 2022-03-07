import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
export class SharedService {

  count = 5;

  constructor() {}

  increaseCount() {
    this.count++;
  }

  decreaseCount() {
    this.count--;
  }
}
