import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent {
  @Input() btnText!: string;

  momentForm!: FormGroup;

  //usado para inicializar coisas do Angular (por isso não é pelo constructor)
  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),  //garante que esse campo é obrigatório
      description: new FormControl('', [Validators.required]),
      image: new FormControl('')
    });
  }

  //exclamação no final para indicar que esses valores podem não ser preenchidos
  get title() {
    return this.momentForm.get('title')!;
  }

  get description() {
    return this.momentForm.get('description')!;
  }

  submit() {
    if (this.momentForm.invalid) {
      return;
    }

    console.log("enviou o formulário!");
  }
}
