import { Component } from '@angular/core';
import { Pokemon } from 'src/app/Pokemon';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})

//  DEPOIS (usando a interface)
export class ListRenderComponent {
  informacaoNivelPokemon = '';

  //tipo interface
  mostrarIdade(pokemon: Pokemon) {
    this.informacaoNivelPokemon = `Nível do pokemon ${pokemon.nome} é ${pokemon.nivel}`;
  }

  pokemons: Pokemon[] = [
    { nome: 'pikachu', tipo: 'elétrico', nivel: 10 },
    { nome: 'roselia', tipo: 'planta', nivel: 4 },
    { nome: 'vulpix', tipo: 'fogo', nivel: 7 }
  ]
}

/*  ANTES
export class ListRenderComponent {
  pokemons = [
    { nome: 'pikachu', tipo: 'elétrico' },
    { nome: 'roselia', tipo: 'planta' },
    { nome: 'vulpix', tipo: 'fogo' }
  ]
}*/
