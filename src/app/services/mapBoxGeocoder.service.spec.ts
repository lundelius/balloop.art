import { TestBed, inject } from '@angular/core/testing';

import { MapBoxGeocoderService } from './mapBoxGeocoder.service';

describe('MapBoxGeocoderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapBoxGeocoderService]
    });
  });

  it('should be created', inject([MapBoxGeocoderService], (service: MapBoxGeocoderService) => {
    expect(service).toBeTruthy();
  }));
});
