import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.scss']
})
export class BottomComponent implements OnInit {

  search = '';
  fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Grapes'];

  constructor() {}

  ngOnInit(): void {}

  update() {
    this.fruits.push('Apricot');
    this.fruits = this.fruits.slice();
  }

}
