import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { SearchService } from '../../services/search.service';
import { Pokemons } from '../../classes/pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _SearchService: SearchService) { }

  listpokemons:Pokemons[];

  searchPokemon(pokemon){
    this._SearchService.getpokemon(pokemon.value)
    .subscribe(
      data=>{
        let response = Object.keys(data);
        console.log(data);
        let responseArray = [];
        for (let key of response) { 
          if(key == 'name' || key == 'id'){
            responseArray[key]= data[key];
          }
          if(key == 'sprites'){
            responseArray['image']= data['sprites']['front_default'];
          }
        }
        this.listpokemons = responseArray;
        console.log(this.listpokemons);
      }
    );
  }

  ngOnInit() {
    
  }
}
