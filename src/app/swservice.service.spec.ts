import { TestBed } from '@angular/core/testing';

import { SwserviceService } from './swservice.service';

describe('SwserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwserviceService = TestBed.get(SwserviceService);
    expect(service).toBeTruthy();
  });
});
