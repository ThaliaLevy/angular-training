import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-horaDeCodar';
  nome: String = 'Thalia';
  curso: String = 'Ciência da computação';
  notas = {
    nota: "10",
    materia: "Algoritmos"
  };
}
