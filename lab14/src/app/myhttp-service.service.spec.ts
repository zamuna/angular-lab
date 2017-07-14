import { TestBed, inject } from '@angular/core/testing';

import { MyhttpServiceService } from './myhttp-service.service';

describe('MyhttpServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyhttpServiceService]
    });
  });

  it('should be created', inject([MyhttpServiceService], (service: MyhttpServiceService) => {
    expect(service).toBeTruthy();
  }));
});
