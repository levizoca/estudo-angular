import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Levi';
  age: number = 30;
  job: string = 'Web Developer';
  hobbies: string[] = ['Music', 'Movies', 'Sports'];
  car = {
    name: 'Mustang',
    brand: 'Ford',
    model: 'Mustang',
    year: 1964
  };

  constructor() {}

  ngOnInit() {}
}
