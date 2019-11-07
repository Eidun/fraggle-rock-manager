import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-volver-info',
  templateUrl: './volver-info.component.html',
  styleUrls: ['./volver-info.component.css']
})
export class VolverInfoComponent implements OnInit {

  @Input() tipo: string;
  @Input() id: string;
  
  constructor() { }

  ngOnInit() {
  }

}
