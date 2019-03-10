import { Injectable } from '@angular/core';
import { Hero } from './exercise/Hero';
import { HEROES } from './exercise/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './common/messages/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private baseUrl = 'api/heroes';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // this.messageService.add('HeroService: fetched heroes.');
    this.log('fetched heroes');
    return this.http.get<Hero[]>(this.baseUrl);
  }

  private log(message: string) {
    this.messageService.add(`CommonService: ${message}`);
  }
}
