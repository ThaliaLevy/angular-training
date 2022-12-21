import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  //exibe mensagem na tela se eu preencher algo
  message: string = '';

  constructor() { }

  add(message: string) {
    this.message = message;
    
    setTimeout(() => {
      this.clear();
    }, 4000);
  }

  clear() {
    this.message = '';
  }
}
