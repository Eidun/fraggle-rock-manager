import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botones-data',
  templateUrl: './botones-data.component.html',
  styleUrls: ['./botones-data.component.css']
})
export class BotonesDataComponent implements OnInit {

  @Output() emmiter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  guardar() {
    this.emmiter.emit("");
  }
}
