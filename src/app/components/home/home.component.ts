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
  empList = [];


  searchPokemon(pokemon){

    this._SearchService.getpokemonlist()
    .subscribe(
      data=>{
        this.empList =[];
        
        let response = Object.keys(data['results']);
        for(let keyp of data['results']){
    
          if(keyp['name'].includes(pokemon.value)){

            this._SearchService.getpokemon(keyp['name'])
            .subscribe(
              data=>{

                let response = Object.keys(data);
                let responseArray = [];
                let pokemonName = data['name'];
                for (let key of response) {
                  if(data[key]){
                    if(key == 'name' || key == 'id'){
                      responseArray[key]= data[key];
                    }
                    if(key == 'sprites'){
                      responseArray['image']= data['sprites']['front_default'];
                    }
                  }
                }
                this.listpokemons = responseArray;
                this.empList.push(this.listpokemons);
              }
            )

          }
        }
      }
    );
  }

  ngOnInit() {
    
  }
}
