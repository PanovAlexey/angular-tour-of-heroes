import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import {NazcaFigure} from '../nazca_figure';
import {NazcaFigureService} from '../nazca-figure.service';

@Component({
  selector: 'app-nazca-figure-search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.css' ]
})
export class SearchComponent implements OnInit {
  nazcaFigures$: Observable<NazcaFigure[]>;
  private searchTerms = new Subject<string>();

  constructor(private nazcaFigureService: NazcaFigureService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.nazcaFigures$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.nazcaFigureService.searchNazcaFigures(term)),
    );
  }
}
