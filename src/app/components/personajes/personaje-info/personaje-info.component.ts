import { Component, OnInit } from '@angular/core';
import { EntidadesService } from 'src/app/services/entidades.service';
import { ActivatedRoute } from '@angular/router';
import { Personaje } from 'src/app/models/personaje-model';

@Component({
  selector: 'app-personaje-info',
  templateUrl: './personaje-info.component.html',
  styleUrls: ['./personaje-info.component.css']
})
export class PersonajeInfoComponent implements OnInit {

  personaje: Personaje;
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private personajeService: EntidadesService) { }

  ngOnInit() {
    let idPersonaje;
    this.loading = true;
    this.route.params.subscribe(params => {
      idPersonaje = params.id;
    });
    this.personajeService.getPersonaje(idPersonaje).subscribe(data => {
      this.personaje = new Personaje(data);
      this.loading = false;
    });
  }

}
