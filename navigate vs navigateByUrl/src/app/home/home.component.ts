import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  counter = 0;

  constructor(private router: Router, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.counter = this.sharedService.counter;
  }

  navigate() {
    console.log("Save to Database");
    this.router.navigate(['user', 1]);
  }

  navigateByUrl() {
    this.router.navigateByUrl('/user/1');
  }

  increase() {
    this.sharedService.increase();
    this.counter = this.sharedService.counter;
  }
}
