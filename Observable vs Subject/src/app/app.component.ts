import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  observableData1 = '';
  observableData2 = '';
  subjectData1 = '';
  subjectData2 = '';

  getObservableData() {
    let myObservable = new Observable<any>(observer => {
      // observer.next("Please subscribe to WebTechTalk");
      observer.next(Math.floor(Math.random() * 99) + 1);
    });
    myObservable.subscribe(data => {
      this.observableData1 = data;
    });
    myObservable.subscribe(data => {
      this.observableData2 = data;
    });
  }

  getSubjectData() {
    let mySubject = new Subject();
    mySubject.subscribe((data: string) => {
      this.subjectData1 = data;
    });
    mySubject.subscribe((data: string) => {
      this.subjectData2 = data;
    });
    // mySubject.next("Please subscribe to WebTechTalk");
    mySubject.next(Math.floor(Math.random() * 99) + 1);
  }
}
