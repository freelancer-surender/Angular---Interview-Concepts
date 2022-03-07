import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, mergeMap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  searchControl = new FormControl();
  fruits: string[] = [];
  loading = false;

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(700),
      // switchMap((searchTxt: string) => this.filter(searchTxt))
      switchMap((fruit: string) => this.addFruit(fruit))
    ).subscribe((fruits: any) => {
      this.loading = false;
      // this.fruits = fruits;
      this.fruits.push(fruits);
    })
  }

  filter(searchTxt: string) {
    this.loading = true;
    let observableOne = new Observable<string[]>((observer) => {
      setTimeout(() => {
        observer.next(['apple', 'pineapple']);
      }, 5000);
    });
    let observableTwo = new Observable<string[]>((observer) => {
      setTimeout(() => {
        observer.next(['mango', 'orange']);
      }, 5000);
    });
    if (searchTxt === 'app') {
      return observableOne;
    } else {
      return observableTwo;
    }
  }

  addFruit(fruit: string) {
    this.loading = true;
    let myObservable = new Observable<string>(observer => {
      setTimeout(() => {
        observer.next(fruit);
      }, 5000);
    });
    return myObservable;
  }
}
