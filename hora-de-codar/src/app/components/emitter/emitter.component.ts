import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent {
  numeroAula!: String;
  
  onExibirNumero(): void {
    this.numeroAula = "11";
  }
}
