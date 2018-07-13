import { TestBed, inject } from '@angular/core/testing';

import { CityIdGuardService } from './city-id-guard.service';

describe('CityIdGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CityIdGuardService]
    });
  });

  it('should be created', inject([CityIdGuardService], (service: CityIdGuardService) => {
    expect(service).toBeTruthy();
  }));
});
