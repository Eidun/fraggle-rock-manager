import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HOST } from '../app.values';

@Injectable({
  providedIn: 'root'
})
export class NavesService {

  constructor(private http: HttpClient) { }

  url = HOST + 'naves';
  
  public getNaves()  {
    return this.http.get(this.url);
  }
}
