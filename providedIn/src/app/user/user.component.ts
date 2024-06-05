import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: []
})
export class UserComponent implements OnInit {
  users: any = [];

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.users = this.sharedService.users;
  }
}
