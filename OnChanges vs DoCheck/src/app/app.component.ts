import { Component, DoCheck, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, DoCheck {

  logs: string[] = [];
  textBoxValue: any[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.logs.push('On Changes is triggered');
  }

  ngDoCheck(): void {
    this.logs.push('Do Check is triggered');
  }

  onTextChange(value: any) {
    // this.textBoxValue = value;
    this.textBoxValue.push(value);
    console.log("Text is getting changed");
  }

}
