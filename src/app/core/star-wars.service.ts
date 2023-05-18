import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StarWarsService extends HttpService {
  getPeople(): Observable<string> {
    return this.get<string>('people/1');
  }
}
