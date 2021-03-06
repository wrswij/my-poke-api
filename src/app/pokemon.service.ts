import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { IPokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemon(): Observable<IPokemon[]>{
    return this.http.get<IPokemon[]>(environment.baseApiUrl, { headers: new HttpHeaders().set("x-api-key","5f12c666ca3a672eecc240dc")});
  }
}
