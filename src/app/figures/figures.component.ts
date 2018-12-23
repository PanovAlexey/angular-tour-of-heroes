import {Component, OnInit} from '@angular/core';
import {NazcaFigure} from '../nazca_figure';

@Component({
  selector: 'app-figures',
  templateUrl: './figures.component.html',
  styleUrls: ['./figures.component.css']
})
export class FiguresComponent implements OnInit {
  public nazcaFigure: NazcaFigure = {
    id: 1,
    name: 'Spider',
    coordinates_latitude: '14° 41′ 38.95″ S',
    coordinates_longitude: '75° 7′ 20.58″ W'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
