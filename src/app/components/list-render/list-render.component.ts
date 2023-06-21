import { Component } from '@angular/core';
import { HEROES } from 'src/app/mock-heroes';
import { ANIMALS } from 'src/app/mock-animals';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  heroes = HEROES;
  animals = ANIMALS;

  animalDetails = '';

  showAge(animal: { name: any; age: any; }): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }
}
