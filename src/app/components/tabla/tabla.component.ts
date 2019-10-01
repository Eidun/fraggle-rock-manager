import { Component, OnInit, Input } from '@angular/core';
import { Tableable } from 'src/app/models/tableable';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  @Input() tableInfo: Tableable;

  constructor() { }

  ngOnInit() {
  }

}
