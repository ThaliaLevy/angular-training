import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
texto: string = 'TESTANDO PIPE OPERATOR - AULA 14';
dataDeHoje = new Date();
}
