import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntidadesService } from 'src/app/services/entidades.service';
import { Organizacion } from 'src/app/models/organizacion-model';
import { Nave } from 'src/app/models/nave-model';
import { NavesService } from 'src/app/services/naves.service';

@Component({
  selector: 'app-naves-info',
  templateUrl: './naves-info.component.html',
  styleUrls: ['./naves-info.component.css']
})
export class NavesInfoComponent implements OnInit {

  loading: boolean = true;
  nave: Nave;

  constructor(private route: ActivatedRoute, private naveService: NavesService) { }

  ngOnInit() {
    let idNave;
    this.loading = true;
    this.route.params.subscribe(params => {
      idNave = params.id;
    });
    this.naveService.getNave(idNave).subscribe(data => {
      this.nave = new Nave(data);
      this.loading = false;
    });
  }

}
