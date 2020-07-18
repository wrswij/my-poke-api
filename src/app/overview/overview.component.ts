import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { IPokemon } from '../pokemon';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  pokemons: IPokemon[];

  constructor(private pokemonService : PokemonService) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(){
    this.pokemonService.getPokemon().subscribe(
      (data) => this.pokemons = data
    )
  }

}
