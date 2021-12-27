import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HeroService } from 'src/app/hero.service';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'heroes-tour-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
