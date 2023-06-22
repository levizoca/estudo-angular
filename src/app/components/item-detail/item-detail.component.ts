import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from 'src/app/Animal';
import { Hero } from 'src/app/Hero';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent {
  animal?: Animal;
  animals: Animal[] = [];
  hero?: Hero;

  constructor(private listService: ListService, private route: ActivatedRoute) {
    this.getAnimal();
    this.getHero();
  }

  canShow(): boolean {
    return this.animal !== undefined;
  }

  getAnimal(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.listService.getItem(id).subscribe((animal) => (this.animal = animal))
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.listService.getItemHero(id).subscribe((hero) => this.hero = hero);
  }
}
