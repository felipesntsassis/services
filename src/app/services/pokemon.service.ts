import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { PokemonData } from '../models/pokemon-data';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl: string = '';
  private pokeData: PokemonData | any;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.pokeApi;
  }

  getPokemon(pokemonName: string): Observable<PokemonData> {
    this.pokeData = this.http.get<PokemonData>(`${this.baseUrl}/${pokemonName}`);
    return this.pokeData;
  }

}
