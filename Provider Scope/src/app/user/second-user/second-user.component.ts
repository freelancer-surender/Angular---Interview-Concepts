import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-second-user',
  templateUrl: './second-user.component.html',
  styleUrls: ['./second-user.component.scss'],
})
export class SecondUserComponent implements OnInit {
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
