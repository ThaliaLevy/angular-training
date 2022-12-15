import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent {
@Input() nomeNoComponente: String = '';
@Input() cursoNoComponente: String = '';
@Input() notas!: {nota: String; materia: String};
}
