import { TestBed } from '@angular/core/testing';

import { FashionClientApiService } from './fashion-client-api.service';

describe('FashionClientApiService', () => {
  let service: FashionClientApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FashionClientApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
