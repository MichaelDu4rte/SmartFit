import { TestBed } from '@angular/core/testing';

import { FindUnitService } from './find-unit.service';

describe('FindUnitService', () => {
  let service: FindUnitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindUnitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
