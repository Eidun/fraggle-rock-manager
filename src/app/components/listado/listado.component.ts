import { Component, OnInit } from '@angular/core';
import { EntidadesService } from 'src/app/services/entidades.service';
import { EntidadTable } from 'src/app/models/entidad-model';
import { OrganizacionTable } from 'src/app/models/organizacion-model';
import { PersonajeTable } from 'src/app/models/personaje-model';
import { Tableable } from 'src/app/models/tableable';
import { LugaresService } from 'src/app/services/lugares.service';
import { LugarTable } from 'src/app/models/lugar-model';
import { NaveTable } from 'src/app/models/nave-model';
import { NavesService } from 'src/app/services/naves.service';
import { Router } from '@angular/router';

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

  table: Tableable;
  constructor(private router: Router, private entidadesService: EntidadesService, private lugaresService: LugaresService, private navesService: NavesService) { }

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
        this.entidadesService.getOrganizaciones().subscribe(data => {
          this.table = new OrganizacionTable(data);
          this.loading = false;
        })
        break;
      case 'personajes':
        this.entidadesService.getPersonajes().subscribe(data => {
          this.table = new PersonajeTable(data);
          this.loading = false;
        })
        break;
      case 'lugares':
        this.lugaresService.getLugares().subscribe(data => {
          this.table = new LugarTable(data);
          this.loading = false;
        })
        break;
        case 'naves':
            this.navesService.getNaves().subscribe(data => {
              this.table = new NaveTable(data);
              this.loading = false;
            })
            break;
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

  filtrar(event) {
    this.table.filter = event.target.value;
  }
}
