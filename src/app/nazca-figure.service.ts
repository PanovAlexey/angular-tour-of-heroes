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
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('NazcaFigureService: fetched figures');

    return of(NAZCA_FIGURES);
  }
}
