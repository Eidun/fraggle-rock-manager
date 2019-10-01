import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrganizacionesService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:5000/organizaciones';
  
  public getOrganizaciones()  {
    return this.http.get(this.url);
  }
}
