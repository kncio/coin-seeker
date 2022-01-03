import { TestBed } from '@angular/core/testing';

import { ApiNewsServiceService } from './api-news-service.service';

describe('ApiNewsServiceService', () => {
  let service: ApiNewsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiNewsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
