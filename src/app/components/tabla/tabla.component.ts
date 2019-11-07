import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tableable } from 'src/app/models/tableable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  @Input() tableInfo: Tableable;
  @Input() borrable: boolean;
  @Output() borrableAction: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getDetalles(element) {
    this.router.navigate(['/info' + element.path, element.id]);
  }

  borrar() {
    this.borrableAction.emit(true);
  }

}
