import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HOST } from '../app.values';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {

  constructor(private http: HttpClient) { }

  url = HOST + 'lugares';
  
  public getLugares()  {
    return this.http.get(this.url);
  }

  public getLugar(idLugar) {
    return this.http.get(this.url + '/' + idLugar);
  }
}
