import { TestBed } from '@angular/core/testing';

import { NewsServicesService } from './news-services.service';

describe('NewsServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsServicesService = TestBed.get(NewsServicesService);
    expect(service).toBeTruthy();
  });
});
