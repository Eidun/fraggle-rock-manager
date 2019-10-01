import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:5000/personajes';
  
  public getPersonajes()  {
    return this.http.get(this.url);
  }
}
