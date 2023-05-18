import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseUrl: string = 'https://swapi.dev/api/';

  constructor(protected http: HttpClient) {}

  setUrl(url: string) {
    this.baseUrl = url;
  }

  public get<T>(url: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${url}`);
  }

  public getBlob(url: string, body?: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${url}`, body, {
      responseType: 'blob',
    });
  }

  public post<T>(url: string, body?: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${url}`, body);
  }

  public patch<T>(url: string, body?: any): Observable<T> {
    return this.http.patch<T>(`${this.baseUrl}/${url}`, body);
  }

  public delete(url: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${url}`);
  }
}
