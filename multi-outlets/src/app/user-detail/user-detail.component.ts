import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  users: any = [];
  id = "";
  user: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.users = [
      { id: "harry", name: "Harry Potter", img: "https://media.harrypotterfanzone.com/harry-potter-philosophers-stone-portrait-5.jpg"},
      { id: "ron", name: "Ron Weasley", img: "https://i.pinimg.com/736x/89/50/72/895072bd1ea794ae75552e4cfacfd8fb.jpg"},
      { id: "hermione", name: "Hermione Granger", img: "https://i.pinimg.com/564x/c7/f9/83/c7f9834f8a747bdb93f97d428b8d109e.jpg"},
    ];
    this.route.params.subscribe(route => {
      this.id = route["id"];
      this.user = this.users.find((x: any) => x.id === this.id);
    })
  }

}
