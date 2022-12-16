import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  pokemons = [
    { nome: 'pikachu', tipo: 'elétrico' },
    { nome: 'roselia', tipo: 'planta' },
    { nome: 'vulpix', tipo: 'fogo' }
  ]
}
