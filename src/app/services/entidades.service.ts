import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HOST } from '../app.values'
@Injectable({
  providedIn: 'root'
})
export class EntidadesService {

  constructor(private http: HttpClient) { }

  entidadesURL = HOST + 'entidades';
  organizacionesURL = HOST + 'organizaciones';
  personajesURL = HOST + 'personajes';

  private getData(url) {
    return this.http.get(url);
  }

  public getEntidades() {
    return this.getData(this.entidadesURL);
  }

  public getOrganizaciones() {
    return this.getData(this.organizacionesURL);
  }


  public getPersonajes() {
    return this.getData(this.personajesURL);
  }

  public getPersonaje(idPersonaje) {
    return this.getData(this.personajesURL + '/' + idPersonaje)
  }

  public getOrganizacion(idOrganizacion) {
    return this.getData(this.organizacionesURL + '/' + idOrganizacion)
  }
}
