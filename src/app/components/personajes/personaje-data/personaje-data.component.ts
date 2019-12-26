import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { EntidadesService } from 'src/app/services/entidades.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Personaje } from 'src/app/models/personaje-model';
import { OrganizacionTable, Organizacion } from 'src/app/models/organizacion-model';
@Component({
  selector: 'app-personaje-data',
  templateUrl: './personaje-data.component.html',
  styleUrls: ['./personaje-data.component.css']
})
export class PersonajeDataComponent implements OnInit {


  public personajeForm: FormGroup;
  personaje: Personaje;


  imagenURL = "";
  loading: boolean = false;

  organizacionFocus = false;
  organizaciones: any = [];
  organizacionesFiltro = "";
  loadingOrganizaciones = true;

  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private entidadesService: EntidadesService) {
    this.personaje = new Personaje();
   }

  ngOnInit() {
    this.personajeForm = this.fb.group({
      id: [],
      alias: ["", Validators.required],
      nombre: [""],
      apellidos: [""],
      rango: [""],
      edad: [""],
      raza: [""],
      descripcion: [""],
      imagen: [""],
      organizacion_id: [],
      residencia_id: []
    });

    this.checkIDPersonaje();
    this.loadOrganizaciones();
  }

  public checkIDPersonaje() {
    let idPersonaje;

    this.route.params.subscribe(params => {
      idPersonaje = params.id;
      if (idPersonaje) {
        this.loadPersonaje(idPersonaje)
      }
    });
  }

  public loadPersonaje(idPersonaje) {
    this.loading = true;
    this.entidadesService.getPersonaje(idPersonaje).subscribe((data: any) => {
      this.personaje = new Personaje(data);
      this.personajeForm.controls.id.setValue(data.id);
      this.personajeForm.controls.alias.setValue(data.alias);
      this.personajeForm.controls.nombre.setValue(data.nombre);
      this.personajeForm.controls.apellidos.setValue(data.apellidos);
      this.personajeForm.controls.rango.setValue(data.rango);
      this.personajeForm.controls.edad.setValue(data.edad);
      this.personajeForm.controls.raza.setValue(data.raza);
      this.personajeForm.controls.descripcion.setValue(data.descripcion);
      this.personajeForm.controls.imagen.setValue(data.imagen);
      this.loading = false;
      this.checkImagen();
    });
  }

  public loadOrganizaciones() {
    this.loadingOrganizaciones = true;
    this.entidadesService.getOrganizaciones().subscribe(data => {
      this.organizaciones = data;
      this.loadingOrganizaciones = false;
    });
  }

  checkImagen() {
    this.imagenURL = this.personajeForm.value.imagen;
  }

  guardarPersonaje(event) {
    let personajeRequest;
    const personajePayload = this.generatePayload();
    if (this.personajeForm.value.id) {
      personajeRequest = this.entidadesService.updatePersonaje(this.personajeForm.value.id, personajePayload);
    } else {
      personajeRequest = this.entidadesService.newPersonaje(personajePayload);
    }
    personajeRequest.subscribe(data => {
      this.router.navigate(['/info/personajes', data.id]);
    });
  }

  generatePayload() {
    const payload = {
      type: 'personaje',
      data: [],
      alias: this.personajeForm.value.alias
    }
    Object.keys(this.personajeForm.value).forEach(key => {
      if (key !== 'alias' && key !== 'id') {
        payload.data.push({
          field: key,
          value: this.personajeForm.value[key]
        });
      }
    });
    return payload;
  }

  eliminarPersonaje(event) {
    let personajeRequest;
    if (this.personajeForm.value.id) {
      personajeRequest = this.entidadesService.deletePersonaje(this.personajeForm.value.id);
      personajeRequest.subscribe(data => {
        this.router.navigate(['/']);
      });
    } else {
      alert("Solo se puede eliminar un personaje creado");
    }
  }

  organizacionesFiltradas() {
    const resultados = this.organizaciones.filter(organizacion => organizacion.alias.toLowerCase().includes(this.organizacionesFiltro.toLowerCase())).slice(0, 3);
    return resultados.length > 0 ? resultados : [{ alias: 'No hay resultados' }]
  }

  filtrarOrganizaciones(event) {
    this.organizacionesFiltro = event.target.value;
  }

  cambiarOrganizacion(organizacion: Organizacion) {
    this.personajeForm.value.organizacion_id = organizacion.id;
    this.personaje.organizacion = new OrganizacionTable([organizacion]);
  }

  abandonarOrganizacion() {
    this.personajeForm.value.organizacion_id = null;
    this.personaje.organizacion = null;
  }


  salirFocoOrganizaciones() {
    setTimeout(() => { this.organizacionFocus = false; }, 200)
  }

}
