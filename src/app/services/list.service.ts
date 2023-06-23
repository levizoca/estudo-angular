import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { Hero } from '../Hero';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  remove(id: number) {
    return this.http.delete<Animal>(`${this.apiUrl}/animals/${id}`);
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(`${this.apiUrl}/animals`);
  }

  getAllHeros(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.apiUrl}/heroes`);
  }

  getItem(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/animals/${id}`);
  }

  getItemHero(id: number): Observable<Hero> {
    return this.http.get<Hero>(`${this.apiUrl}/heroes/${id}`);
  }
}
