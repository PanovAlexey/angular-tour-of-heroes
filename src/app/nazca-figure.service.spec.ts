import { TestBed } from '@angular/core/testing';

import { NazcaFigureService } from './nazca-figure.service';

describe('NazcaFigureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NazcaFigureService = TestBed.get(NazcaFigureService);
    expect(service).toBeTruthy();
  });
});
