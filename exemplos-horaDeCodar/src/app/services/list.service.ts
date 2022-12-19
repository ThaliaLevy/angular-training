import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pokemon } from '../Pokemon';

@Injectable({
  providedIn: 'root'
})

export class ListService {

  //necessário passar pelo construtor para que se tenha acesso aos metodos do http
  constructor(private http: HttpClient) { }

  remover(id: number) {
    return this.http.delete<Pokemon>(`${this.apiUrl}/${id}`)
  }

  private apiUrl = 'http://localhost:3000/pokemons';

  getAll(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.apiUrl);
  }

  getItem(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiUrl}/${id}`);
  }
}
