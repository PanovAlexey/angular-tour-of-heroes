import { Component, Input, OnInit } from '@angular/core';
import { NazcaFigure } from '../nazca_figure';

@Component({
  selector: 'app-figure-detail',
  templateUrl: './figure-detail.component.html',
  styleUrls: ['./figure-detail.component.css']
})
export class FigureDetailComponent implements OnInit {

  @Input() nazcaFigure: NazcaFigure;

  constructor() { }

  ngOnInit() {
  }

}
