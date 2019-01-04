import { InMemoryDbService } from 'angular-in-memory-web-api';
import { NazcaFigure } from './nazca_figure';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const nazcaFigures = [
      {id: 10, name: 'Spider', coordinates_latitude: '14° 41′ 38.17″ S', coordinates_longitude: '75° 07′ 27.03″ W'},
      {id: 11, name: 'Bird', coordinates_latitude: '14° 41′ 08.72″ S', coordinates_longitude: '75° 06′ 49.54″ W'},
      {id: 12, name: 'Whale', coordinates_latitude: '14° 41′ 32.29″ S', coordinates_longitude: '75° 8′ 56.48″ W'},
      {id: 13, name: 'Condor', coordinates_latitude: '14° 41′ 22.19″ S', coordinates_longitude: '75° 8′ 56.48″ W'},
      {id: 14, name: 'Astronaut', coordinates_latitude: '14° 11′ 32.22″ S', coordinates_longitude: '75° 8′ 26.42″ W'},
      {id: 15, name: 'Tree', coordinates_latitude: '14° 41′ 12.24″ S', coordinates_longitude: '75° 4′ 56.51″ W'},
      {id: 16, name: 'Monkey', coordinates_latitude: '14° 41′ 52.11″ S', coordinates_longitude: '75° 5′ 46.28″ W'}
    ];

    return {nazcaFigures};
  }

  genId(nazcaFigures: NazcaFigure[]): number {
    return nazcaFigures.length > 0 ? Math.max(...nazcaFigures.map(nazcaFigure => nazcaFigure.id)) + 1 : 10;
  }
}
