import { TestBed } from '@angular/core/testing';

import { GetRWISStationsService } from './get-rwisstations.service';

describe('GetRWISStationsService', () => {
  let service: GetRWISStationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRWISStationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
