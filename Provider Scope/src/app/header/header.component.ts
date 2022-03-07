import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToHome() {
    this.router.navigate(['home']);
  }

  goToFirstUser() {
    this.router.navigate(['user/first']);
  }

  goToSecondUser() {
    this.router.navigate(['user/second']);
  }

  goToFirstProduct() {
    this.router.navigate(['product/first']);
  }

  goToSecondProduct() {
    this.router.navigate(['product/second']);
  }
}
