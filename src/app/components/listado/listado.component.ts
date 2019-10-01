import { Component, OnInit } from '@angular/core';
import { EntidadesService } from 'src/app/services/entidades.service';
import { EntidadTable } from 'src/app/models/entidad-model';
import { OrganizacionTable } from 'src/app/models/organizacion-model';
import { OrganizacionesService } from 'src/app/services/organizaciones.service';
import { PersonajesService } from 'src/app/services/personajes.service';
import { PersonajeTable } from 'src/app/models/personaje-model';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  loading = true;

  personajesButton = true;
  organizacionesButton = true;
  navesButton = false;
  lugaresButton = false;

  // testTable: Tableable = {
  //   heads: ['Alias', 'Tipo'],
  //   data: [{ id: '1', values: ['Barón Von Dolt', 'Personaje'] }, { id: '2', values: ['Machacasaurio', 'Personaje'] }, { id: '3', values: ['Los imparables', 'Organizacion'] }],
  //   path: 'entidades'
  // }
  table;
  constructor(private entidadesService: EntidadesService, private organizacionesService: OrganizacionesService, private personajesService: PersonajesService) { }

  ngOnInit() {
    this.obtenerDatos();
  }

  obtenerDatos() {
    this.loading = true;
    const fuenteDatos = this.comprobarFuente();
    switch (fuenteDatos) {
      case 'entidades':
        this.entidadesService.getEntidades().subscribe(data => {
          this.table = new EntidadTable(data);
          this.loading = false;
        });
        break;
      case 'organizaciones':
        this.organizacionesService.getOrganizaciones().subscribe(data => {
          this.table = new OrganizacionTable(data);
          this.loading = false;
        })
        break;
      case 'personajes':
        this.personajesService.getPersonajes().subscribe(data => {
          this.table = new PersonajeTable(data);
          this.loading = false;
        })
    }
  }

  comprobarFuente() {
    if (this.personajesButton && this.organizacionesButton) {
      return 'entidades';
    }
    if (this.personajesButton) {
      return 'personajes';
    }
    if (this.organizacionesButton) {
      return 'organizaciones';
    }
    if (this.navesButton && this.lugaresButton) {
      return 'estaciones-espaciales';
    }
    if (this.navesButton) {
      return 'naves';
    }
    if (this.lugaresButton) {
      return 'lugares';
    }
  }



}
