import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from 'src/app/services/lugares.service';
import { Lugar } from 'src/app/models/lugar-model';

@Component({
  selector: 'app-lugar-info',
  templateUrl: './lugar-info.component.html',
  styleUrls: ['./lugar-info.component.css']
})
export class LugarInfoComponent implements OnInit {

  lugar: Lugar;
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private lugarService: LugaresService) { }

  ngOnInit() {
    let idLugar;
    this.loading = true;
    this.route.params.subscribe(params => {
      idLugar = params.id;
    });
    this.lugarService.getLugar(idLugar).subscribe(data => {
      this.lugar = new Lugar(data);
      this.loading = false;
    });
  }

}
