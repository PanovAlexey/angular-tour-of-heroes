import {Component, OnInit} from '@angular/core';
import {NazcaFigure} from '../nazca_figure';
import {NazcaFigureService} from '../nazca-figure.service';

@Component({
  selector: 'app-figures',
  templateUrl: './figures.component.html',
  styleUrls: ['./figures.component.css']
})
export class FiguresComponent implements OnInit {
  public nazcaFigures: NazcaFigure[];

  constructor(private nazcaFigureService: NazcaFigureService) {
  }

  ngOnInit() {
    this.getNazcaFigures();
  }

  getNazcaFigures(): void {
    this.nazcaFigureService.getNazcaFigures()
      .subscribe(nazcaFigures => this.nazcaFigures = nazcaFigures);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.nazcaFigureService.addNazcaFigure({ name } as NazcaFigure)
      .subscribe(nazcaFigure => {
        this.nazcaFigures.push(nazcaFigure);
      });
  }

  delete(nazcaFigure: NazcaFigure): void {
    this.nazcaFigures = this.nazcaFigures.filter(h => h !== nazcaFigure);
    this.nazcaFigureService.deleteNazcaFigure(nazcaFigure).subscribe();
  }

}
