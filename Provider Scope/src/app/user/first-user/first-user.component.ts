import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-first-user',
  templateUrl: './first-user.component.html',
  styleUrls: ['./first-user.component.scss'],
})
export class FirstUserComponent implements OnInit {
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
