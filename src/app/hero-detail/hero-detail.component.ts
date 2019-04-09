import { Component, OnInit, Input} from '@angular/core';
import { Hero } from '../hero'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styles: ['./hero-detail.component.css']
})



export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero; // Chức năng là gì?

  constructor() { }

  ngOnInit() {
  }

}
