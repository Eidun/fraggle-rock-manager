import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntidadesService } from 'src/app/services/entidades.service';
import { Organizacion } from 'src/app/models/organizacion-model';

@Component({
  selector: 'app-organizacion-info',
  templateUrl: './organizacion-info.component.html',
  styleUrls: ['./organizacion-info.component.css']
})
export class OrganizacionInfoComponent implements OnInit {

  loading: boolean = true;
  organizacion: Organizacion;

  constructor(private route: ActivatedRoute, private organizacionService: EntidadesService) { }

  ngOnInit() {
    let idOrganizacion;
    this.loading = true;
    this.route.params.subscribe(params => {
      idOrganizacion = params.id;
    });
    this.organizacionService.getOrganizacion(idOrganizacion).subscribe(data => {
      this.organizacion = new Organizacion(data);
      this.loading = false;
    });
  }

}
