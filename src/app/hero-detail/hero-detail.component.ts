import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
   @Input() panda: Hero;

  constructor(private route: ActivatedRoute,
  private heroService: HeroService,
  private location: Location) { }

  ngOnInit() {
    this.getHero();
  }
  getHero(): void {
  const id = +this.route.snapshot.paramMap.get('id'); //type casting of strimg to num
  this.heroService.getHero(id)
    .subscribe(hero => this.panda = hero);
}
goBack(): void {
  this.location.back();
}

}