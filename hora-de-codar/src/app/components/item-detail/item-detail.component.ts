import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/Pokemon';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent {
  pokemon?: Pokemon;

  constructor(private listService: ListService, private route: ActivatedRoute) {
    this.getPokemon();
  }

  getPokemon() {  
    const id = Number(this.route.snapshot.paramMap.get('id'));  //id pego da rota
    this.listService.getItem(id).subscribe((pokemon) => (this.pokemon = pokemon));
  }
}
