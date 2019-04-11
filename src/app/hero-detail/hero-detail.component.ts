import { Component, OnInit, Input} from '@angular/core';
import { Location} from '@angular/common'
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})



export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero; 

  constructor(private heroService: HeroService, // get hero data from the remote server and this component will use it to get the hero-to-display
              private route: ActivatedRoute,    // hold information about the route to this instance of the HeroDetailComponent
              private location: Location        // is an Angular service for interacting with the browser) { }
  ){}

  ngOnInit() {  
   this.getHero();
  }

  goBack(): void {
    this.location.back();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
                    .subscribe(hero => this.hero = hero);
  }
}
