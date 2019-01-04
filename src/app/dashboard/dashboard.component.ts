import { Component, OnInit } from '@angular/core';
import { NazcaFigure } from '../nazca_figure';
import { NazcaFigureService } from '../nazca-figure.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  public nazcaFigures: NazcaFigure[] = [];

  constructor(private nazcaFigureService: NazcaFigureService) { }

  ngOnInit() {
    this.getNazcaFigures();
  }

  private getNazcaFigures(): void {
    this.nazcaFigureService.getNazcaFigures()
      .subscribe(nazcaFigures => this.nazcaFigures = nazcaFigures.slice(1, 5));
  }
}
