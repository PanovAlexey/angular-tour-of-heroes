import {Injectable} from '@angular/core';
import {NazcaFigure} from './nazca_figure';
import {Observable, of} from "rxjs";
import {catchError, map, tap} from 'rxjs/operators';
import {MessagesService} from "./messages.service";
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class NazcaFigureService {
  private nazcaFiguresUrl = 'api/nazcaFigures';

  constructor(
    private http: HttpClient,
    private messageService: MessagesService
  ) {
  }

  /** GET figures from the server */
  public getNazcaFigures (): Observable<NazcaFigure[]> {
    return this.http.get<NazcaFigure[]>(this.nazcaFiguresUrl)
      .pipe(
        tap(_ => this.log('fetched figures')),
        catchError(this.handleError('getNazcaFigures', []))
      );
  }

  /** Log message with the MessageService */
  private log(message: string) {
    this.messageService.add(`FigureService: ${message}`);
  }

  /** GET nazcaFigure by id. Return `undefined` when id not found */
  getNazcaFigureNo404<Data>(id: number): Observable<NazcaFigure> {
    const url = `${this.nazcaFiguresUrl}/?id=${id}`;
    return this.http.get<NazcaFigure[]>(url)
      .pipe(
        map(nazcaFigures => nazcaFigures[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} nazcaFigure id=${id}`);
        }),
        catchError(this.handleError<NazcaFigure>(`getNazcaFigure id=${id}`))
      );
  }

  /** GET nazcaFigure by id. Will 404 if id not found */
  getNazcaFigure(id: number): Observable<NazcaFigure> {
    const url = `${this.nazcaFiguresUrl}/${id}`;
    return this.http.get<NazcaFigure>(url).pipe(
      tap(_ => this.log(`fetched nazcaFigure id=${id}`)),
      catchError(this.handleError<NazcaFigure>(`getNazcaFigure id=${id}`))
    );
  }

  /* GET nazcaFigures whose name contains search term */
  searchNazcaFigures(term: string): Observable<NazcaFigure[]> {
    if (!term.trim()) {
      // if not search term, return empty nazcaFigure array.
      return of([]);
    }

    return this.http.get<NazcaFigure[]>(`${this.nazcaFiguresUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found nazcaFigures matching "${term}"`)),
      catchError(this.handleError<NazcaFigure[]>('searchNazcaFigures', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new nazcaFigure to the server */
  addNazcaFigure (nazcaFigure: NazcaFigure): Observable<NazcaFigure> {
    return this.http.post<NazcaFigure>(this.nazcaFiguresUrl, nazcaFigure, httpOptions).pipe(
      tap((nazcaFigure: NazcaFigure) => this.log(`added nazcaFigure w/ id=${nazcaFigure.id}`)),
      catchError(this.handleError<NazcaFigure>('addNazcaFigure'))
    );
  }

  /** DELETE: delete the nazcaFigure from the server */
  deleteNazcaFigure (nazcaFigure: NazcaFigure | number): Observable<NazcaFigure> {
    const id = typeof nazcaFigure === 'number' ? nazcaFigure : nazcaFigure.id;
    const url = `${this.nazcaFiguresUrl}/${id}`;

    return this.http.delete<NazcaFigure>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted nazcaFigure id=${id}`)),
      catchError(this.handleError<NazcaFigure>('deleteNazcaFigure'))
    );
  }

  /** PUT: update the nazcaFigure on the server */
  updateNazcaFigure (nazcaFigure: NazcaFigure): Observable<any> {
    return this.http.put(this.nazcaFiguresUrl, nazcaFigure, httpOptions).pipe(
      tap(_ => this.log(`updated nazcaFigure id=${nazcaFigure.id}`)),
      catchError(this.handleError<any>('updateNazcaFigure'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
