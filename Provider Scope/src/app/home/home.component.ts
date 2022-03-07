import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  count = 0;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.count = this.sharedService.count;
  }

  increase() {
    this.sharedService.increaseCount();
    this.count = this.sharedService.count;
  }

  decrease() {
    this.sharedService.decreaseCount();
    this.count = this.sharedService.count;
  }
}
