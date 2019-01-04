import {Component, OnInit} from '@angular/core';
import {NazcaFigure} from '../nazca_figure';
import {NazcaFigureService} from '../nazca-figure.service';

@Component({
  selector: 'app-figures',
  templateUrl: './figures.component.html',
  styleUrls: ['./figures.component.css']
})
export class FiguresComponent implements OnInit {
  public selectedNazcaFigure: NazcaFigure;

  public nazcaFigures: NazcaFigure[];

  public onSelect(nazcaFigure: NazcaFigure): void {
    this.selectedNazcaFigure = nazcaFigure;
  }

  private getNazcaFigures(): void {
    this.nazcaFigureService.getNazcaFigures()
      .subscribe(nazcaFigures => this.nazcaFigures = nazcaFigures);
  }

  constructor(private nazcaFigureService: NazcaFigureService) {
  }

  ngOnInit() {
    this.getNazcaFigures();
  }

}
