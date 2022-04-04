import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {

  formattedValue = '';
  @Input() valueFromParent = 0;

  constructor() {
    console.log("In Constructor - Value: " + this.valueFromParent);
  }

  ngOnInit(): void {
    console.log("In Oninit - Value: " + this.valueFromParent);
    if (this.valueFromParent < 50) {
      this.formattedValue = 'less than fifty';
    } else {
      this.formattedValue = 'greater than or equal to fifty';
    }
  }
}
