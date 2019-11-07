import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cabecera',
  templateUrl: './cabecera.component.html',
})
export class CabeceraComponent implements OnInit {

  @Input() titulo: string;

  constructor() { }

  ngOnInit() {
  }

}
