import { TestBed } from '@angular/core/testing';

import { VoertuigsoortService } from './voertuigsoort.service';

describe('VoertuigsoortService', () => {
  let service: VoertuigsoortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoertuigsoortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
