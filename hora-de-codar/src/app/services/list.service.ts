import { Injectable } from '@angular/core';

import { Pokemon } from '../Pokemon';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remover(pokemons: Pokemon[], pokemon: Pokemon){
    //remove um pokemon se nome igual ao passado, os outros continuam
    return pokemons.filter((a) => pokemon.nome !== a.nome);
  }
}
