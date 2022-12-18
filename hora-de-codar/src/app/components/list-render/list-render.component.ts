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
  constructor(private listService: ListService) {
    this.getPokemons();
  }

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

  pokemons: Pokemon[] = [];

  getPokemons(): void {
    /* Forma errada: this.pokemons = this.listService.getAll();
     pois não é possível atribuir valor quando se usa o Observable (no service)
     Forma correta: */
    this.listService.getAll().subscribe((pokemons) => (this.pokemons = pokemons));
  }

  removerPokemon(pokemon: Pokemon) {
    //exclusão do front
    this.pokemons = this.pokemons.filter((a) => pokemon.nome !== a.nome);
    //exclusão na tabela
    this.listService.remover(pokemon.id).subscribe();
  }
}


