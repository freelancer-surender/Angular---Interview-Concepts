import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedValue: any;
  selectedStudent: any;

  students: any[] = [
    {id: 1, name: "Harry"},
    {id: 2, name: "Ron"},
    {id: 3, name: "Hermoine"}
  ]

  onSelect() {
    console.log(this.selectedStudent)
  }

}
