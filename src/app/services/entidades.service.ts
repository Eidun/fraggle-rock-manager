import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntidadesService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:5000/entidades';
  
  public getEntidades()  {
    return this.http.get(this.url);
  }
}
