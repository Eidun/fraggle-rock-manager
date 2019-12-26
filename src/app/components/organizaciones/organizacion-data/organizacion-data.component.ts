import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { Organizacion } from 'src/app/models/organizacion-model';
import { EntidadesService } from 'src/app/services/entidades.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-organizacion-data',
  templateUrl: './organizacion-data.component.html',
  styleUrls: ['./organizacion-data.component.css']
})
export class OrganizacionDataComponent implements OnInit {


  public organizacionForm: FormGroup;
  organizacion: Organizacion;

  imagenURL = "";
  loading: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private entidadesService: EntidadesService) {
    this.organizacion = new Organizacion();
   }

  ngOnInit() {
    this.organizacionForm = this.fb.group({
      id: [],
      alias: ["", Validators.required],
      status: [""],
      nivel_poder: [""],
      numero_miembros: [""],
      descripcion: [""]
    });

    this.checkIDOrganizacion();
  }

  public checkIDOrganizacion() {
    let idOrganizacion;

    this.route.params.subscribe(params => {
      idOrganizacion = params.id;
      if (idOrganizacion) {
        this.loadOrganizacion(idOrganizacion)
      }
    });
  }

  public loadOrganizacion(idOrganizacion) {
    this.loading = true;
    this.entidadesService.getOrganizacion(idOrganizacion).subscribe((data: any) => {
      this.organizacion = new Organizacion(data);
      this.organizacionForm.controls.id.setValue(data.id);
      this.organizacionForm.controls.alias.setValue(data.alias);
      this.organizacionForm.controls.status.setValue(data.status);
      this.organizacionForm.controls.nivelPoder.setValue(data.nivelPoder);
      this.organizacionForm.controls.numeroMiembros.setValue(data.numeroMiembros);
      this.organizacionForm.controls.descripcion.setValue(data.descripcion);
      this.loading = false;
      this.checkImagen();
    });
  }

  checkImagen() {
    this.imagenURL = this.organizacionForm.value.imagen;
  }

  guardarOrganizacion(event) {
    let organizacionRequest;
    const organizacionPayload = this.generatePayload();
    if (this.organizacionForm.value.id) {
      organizacionRequest = this.entidadesService.updateOrganizacion(this.organizacionForm.value.id, organizacionPayload);
    } else {
      organizacionRequest = this.entidadesService.newOrganizacion(organizacionPayload);
    }
    organizacionRequest.subscribe(data => {
      this.router.navigate(['/info/organizaciones', data.id]);
    });
  }

  generatePayload() {
    const payload = {
      type: 'organizacion',
      data: [],
      alias: this.organizacionForm.value.alias
    }
    Object.keys(this.organizacionForm.value).forEach(key => {
      if (key !== 'alias' && key !== 'id') {
        payload.data.push({
          field: key,
          value: this.organizacionForm.value[key]
        });
      }
    });
    return payload;
  }

}
