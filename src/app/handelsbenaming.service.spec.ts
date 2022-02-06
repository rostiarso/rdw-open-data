import { TestBed } from '@angular/core/testing';

import { HandelsbenamingService } from './handelsbenaming.service';

describe('HandelsbenamingService', () => {
  let service: HandelsbenamingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandelsbenamingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
