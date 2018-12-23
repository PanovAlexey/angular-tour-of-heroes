import {Component, OnInit} from '@angular/core';
import {NazcaFigure} from '../nazca_figure';
import {NAZCA_FIGURES} from '../mock-figures';

@Component({
  selector: 'app-figures',
  templateUrl: './figures.component.html',
  styleUrls: ['./figures.component.css']
})
export class FiguresComponent implements OnInit {
  public selectedNazcaFigure: NazcaFigure;

  public nazcaFigures: NazcaFigure[] = NAZCA_FIGURES;

  public onSelect(nazcaFigure: NazcaFigure): void {
    this.selectedNazcaFigure = nazcaFigure;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
