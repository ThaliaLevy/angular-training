import { Component, Output, EventEmitter } from '@angular/core';
import { EmitterComponent } from '../emitter/emitter.component';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent {
  @Output() exibirNumero: EventEmitter<any> = new EventEmitter();

  funcaoInicial(): void {
    this.exibirNumero.emit();
  }
}
