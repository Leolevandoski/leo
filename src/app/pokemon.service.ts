import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {

  constructor(private messageService: MessageService) { }

  getPokemons(): Observable<Pokemon[]> {
   
    this.messageService.add('PokemonService: fetched pokemons');
    return of (POKEMONS);
  }
}