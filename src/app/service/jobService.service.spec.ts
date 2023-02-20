import { TestBed } from '@angular/core/testing';

import { jobService } from './jobService.service';

describe('ServicesService', () => {
  let service: jobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(jobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
