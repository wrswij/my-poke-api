import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { IPokemon } from '../pokemon';
import { MatTableDataSource } from '@angular/material/table';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  displayedColumns: string[] = ['Name'];
  dataSource = new MatTableDataSource<IPokemon>();

  @ViewChild(MatTable) table: MatTable<any>;

  pokemons: IPokemon[];

  constructor(private pokemonService: PokemonService) {}


  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon() {
    this.pokemonService
      .getPokemon()
      .subscribe((data) => (this.dataSource.data = data));
  }
}
