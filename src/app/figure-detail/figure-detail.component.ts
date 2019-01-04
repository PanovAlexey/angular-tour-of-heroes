import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {NazcaFigure} from '../nazca_figure';
import {NazcaFigureService} from '../nazca-figure.service';

@Component({
  selector: 'app-figure-detail',
  templateUrl: './figure-detail.component.html',
  styleUrls: ['./figure-detail.component.css']
})
export class FigureDetailComponent implements OnInit {

  public nazcaFigure: NazcaFigure;

  constructor(
    private route: ActivatedRoute,
    private nazcaFigureService: NazcaFigureService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getNazcaFigure();
  }

  private getNazcaFigure(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.nazcaFigureService.getNazcaFigure(id)
      .subscribe(nazcaFigure => this.nazcaFigure = nazcaFigure);
  }

  private goBack(): void {
    this.location.back();
  }

  public save(): void {
    this.nazcaFigureService.updateNazcaFigure(this.nazcaFigure)
      .subscribe(() => this.goBack());
  }
}
