import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  myObservable: any;
  myPromise: any;
  mySubscription: any;

  create() {
    this.myObservable = new Observable<string>(observer => {
      // console.log("Observable has created");
      // observer.next("Observable has emitted 1");
      // observer.next("Observable has emitted 2");
      // observer.next("Observable has emitted 3");
      // setInterval(() => {
      //   observer.next("Observable is emitting data");
      // }, 1000);
      observer.next("Observable has emitted")
    });

    this.myPromise = new Promise<string>(resolve => {
      // console.log("Promise has created");
      // resolve("Promise has emitted 1");
      // resolve("Promise has emitted 2");
      // resolve("Promise has emitted 3");
      // setInterval(() => {
      //   resolve("Promise is emitting data");
      // }, 1000);
      resolve("Promise has emitted");
    });

    this.myPromise.then(data => {
      console.log(data);
    });
    setTimeout(() => {
      this.myObservable.subscribe(data => {
        console.log(data);
      });
    }, 0);

  }

  execute() {
    this.mySubscription = this.myObservable.subscribe(data => {
      console.log(data);
    });

    this.myPromise.then(data => {
      console.log(data);
    });
  }

  cancel() {
    this.mySubscription.unsubscribe();
  }

}
