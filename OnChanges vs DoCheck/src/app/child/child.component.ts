import { Component, DoCheck, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnChanges, DoCheck {
  logs: string[] = [];

  @Input() inputValue: any[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.logs.push('On Changes is triggered');
  }

  ngDoCheck(): void {
    this.logs.push('Do Check is triggered');
  }
}
