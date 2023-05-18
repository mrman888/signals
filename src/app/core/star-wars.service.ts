import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StarWarsService {
  baseUrl: string = 'https://swapi.dev/api';

  constructor(protected http: HttpClient) {}

  getPeople(): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/people/1`);
  }
}
