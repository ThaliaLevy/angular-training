import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Moment } from 'src/app/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent {
  constructor(private momentService: MomentService, private messagesService: MessagesService, private router: Router){ }

  btnText = "Compartilhar";

  //interação com a api > se espera alguma coisa > por isso, é assíncrona
  async createHandler(moment: Moment) {
    //para enviar o formulário a api, é preciso colocar em um padrão do js
    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if(moment.image) {
      formData.append('image', moment.image);
    }

    await this.momentService.createMoment(formData).subscribe();

    this.messagesService.add('Momento adicionado com sucesso!');

    //redireciona para essa rota após o click de criar momento 
    this.router.navigate(['/about']);
  }
}
