import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpclient: HttpClient){}
  getpokemonlist(): Observable<any>{
    return this.httpclient.get('http://pokeapi.co/api/v2/pokemon/?limit=811')
  }
  getpokemon(pokemon): Observable<any>{
    return this.httpclient.get('https://pokeapi.co/api/v2/pokemon/'+pokemon+'/')
  }
}
