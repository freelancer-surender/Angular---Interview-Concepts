import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
