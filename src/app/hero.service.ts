import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})

export class HeroService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { };

  private heroesUrl = 'api/heroes';

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]> (this.heroesUrl).pipe(tap(_ => this.log('fetched heroes')), catchError (this.handleError<Hero[]>('getHeroes', [])));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error (error);
      this.log(`${operation} failed: ${error.message}`);
      return of (result as T);
    }
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add('HeroService: fetch hero id=${id}');
    return of (HEROES.find(hero => hero.id === id));
  }
}
