import { Component } from '@angular/core';
import { HEROES } from 'src/app/mock-heroes';
import { ANIMALS } from 'src/app/mock-animals';
import { ListService } from 'src/app/services/list.service';
import { Animal } from 'src/app/Animal';
import { Hero } from 'src/app/Hero';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  //heroes = HEROES;
  //animals = ANIMALS;

  heroes: Hero[] = [];
  animals: Animal[] = [];

  animalDetails = '';

  constructor(private listService: ListService) { ~
    this.getAnimals();
    this.getHeros();
  }

  showAge(animal: { name: any; age: any; }): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animal: Animal) {
    this.animals = this.animals.filter((a) => animal.name !== a.name);;
    this.listService.remove(animal.id).subscribe();
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => this.animals = animals);
  }

  getHeros(): void {
    this.listService.getAllHeros().subscribe((heroes) => this.heroes = heroes);
  }
}
