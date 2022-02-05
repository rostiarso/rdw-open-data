import { TestBed } from '@angular/core/testing';

import { MerkServiceService } from './merk-service.service';

describe('MerkServiceService', () => {
  let service: MerkServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MerkServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
