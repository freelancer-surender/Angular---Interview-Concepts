import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  channelName = "WebTechTalk";
  imgPath = "https://images.pexels.com/photos/1114690/pexels-photo-1114690.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  isDisabled = false;
  comments: string[] = [];

  submit(comment: string) {
    this.comments.push(comment);
  }
}
