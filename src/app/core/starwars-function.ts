import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

export function getPeople<T>(): Observable<string> {
  const baseUrl = 'https://swapi.dev/api';
  const http = inject(HttpClient);
  return http.get<string>(`${baseUrl}/people/1`);
}
