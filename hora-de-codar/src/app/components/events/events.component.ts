import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  mostrar: boolean = true;

  showMessage(): void {
    this.mostrar = !this.mostrar; //toggle: mudança do estado
  }
}
