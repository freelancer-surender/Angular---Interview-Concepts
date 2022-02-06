import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BottomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
