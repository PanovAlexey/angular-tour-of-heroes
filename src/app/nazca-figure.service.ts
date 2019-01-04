import { Injectable } from '@angular/core';
import { NazcaFigure } from './nazca_figure';
import { NAZCA_FIGURES } from './mock-figures';
import { Observable, of } from "rxjs";
import { MessagesService} from "./messages.service";


@Injectable({
  providedIn: 'root'
})
export class NazcaFigureService {
  constructor(private messageService: MessagesService) { }

  public getNazcaFigures(): Observable<NazcaFigure[]> {
    this.messageService.add('NazcaFigureService: fetched figures');

    return of(NAZCA_FIGURES);
  }

  public getNazcaFigure(id: number): Observable<NazcaFigure> {
    this.messageService.add(`NazcaFigureService: fetched figure id=${id}`);

    return of(NAZCA_FIGURES.find(nazcaFigure => nazcaFigure.id === id));
  }
}
