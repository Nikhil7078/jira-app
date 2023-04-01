import { TestBed } from '@angular/core/testing';

import { FinalServiceService } from './final-service.service';

describe('FinalServiceService', () => {
  let service: FinalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
