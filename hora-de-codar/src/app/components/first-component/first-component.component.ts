import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  nomeNoComponente: String = "Carlos";
  cursoNoComponente: String = "Engenharia de software";
  listaCursosNoComponente = ['Ciência da computação', 'Engenharia de software', 'Analise e desenvolvimento de sistemas', 'Engenharia da computação'];
  objetoNoComponente = {
    nome: "Fiat",
    ano: "2009"
  };
}
