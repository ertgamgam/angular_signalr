import { TestBed } from '@angular/core/testing';

import { HubconnectionService } from './hubconnection.service';

describe('HubconnectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HubconnectionService = TestBed.get(HubconnectionService);
    expect(service).toBeTruthy();
  });
});
