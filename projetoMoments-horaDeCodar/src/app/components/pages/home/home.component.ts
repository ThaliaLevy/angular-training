import { Component } from '@angular/core';
import { Moment } from 'src/app/Moment';
import { environment } from 'src/environment/environment';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { MomentService } from 'src/app/services/moment.service';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  allMoments: Moment[] = [];  //pegar do banco
  moments: Moment[] = [];   //filtro para ser exibido depois da busca
  baseApiUrl = environment.baseApiUrl;

  //ativa o icone de lupa
  faSearch = faSearch;
  searchTerm: string = '';

  constructor(private momentService: MomentService) { }

  ngOnInit(): void {
    this.momentService.getMoments().subscribe((items) => {
      const data = items.data;

      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString(('pt-BR')
        );
      })

      this.allMoments = data;
      this.moments = data;
    })
  }

  search(e: Event): void {
    //as duas linhas abaixo são para pegar o valor da input (que chama essa função)
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.moments = this.allMoments.filter((moment) =>
      moment.title.toLowerCase().includes(value)  //converter para minusculo (toLowerCase) e verifica se texto está contido (com includes)
    );
  }
}
