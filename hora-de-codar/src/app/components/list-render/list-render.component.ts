import { Component } from '@angular/core';
import { Pokemon } from 'src/app/Pokemon';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})

export class ListRenderComponent {
  // é como se fosse uma injeção de dependencia do java
  constructor(private listService: ListService) {}

  /* ANTES
  
    pokemons = [
      { nome: 'pikachu', tipo: 'elétrico' },
      { nome: 'roselia', tipo: 'planta' },
      { nome: 'vulpix', tipo: 'fogo' }
    ]
  }
    DEPOIS (usando a interface) */
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

  removerPokemon(pokemon: Pokemon) {
    //this.pokemons está pegando a lista atualizada
    this.pokemons = this.listService.remover(this.pokemons, pokemon);
  }
}


