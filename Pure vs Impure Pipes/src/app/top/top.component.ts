import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  name = '';
  mark = 98;

  constructor() {}

  ngOnInit(): void {}

  update() {
    this.mark = 33;
  }

}
