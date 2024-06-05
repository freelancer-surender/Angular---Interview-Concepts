import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class SharedService {

  constructor() { }

  users = [
    {id: 1, name: "Harry Potter"},
    {id: 2, name: "Hermione Granger"},
    {id: 3, name: "Ron Weasley"},
    {id: 4, name: "Severus Snape"},
    {id: 5, name: "Sirius Black"}
  ];
}
