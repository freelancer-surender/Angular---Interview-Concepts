import { Component } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myData = [];
  subject = new BehaviorSubject(343432);

  emitData() {
    // this.subject.next(1);
    // console.log(1);
    setTimeout(() => {
      this.subject.next(2);
      console.log(2);
    }, 3000);
    setTimeout(() => {
      this.subject.next(3);
      console.log(3);
    }, 6000);
    setTimeout(() => {
      this.subject.next(4);
      console.log(4);
    }, 9000);
    setTimeout(() => {
      this.subject.next(5);
      console.log(5);
    }, 12000);
  }

  getData() {
    console.log('Subscribed');
    this.subject.subscribe((data: any) => {
      this.myData.push(data);
    });
  }
}
