import { TestBed } from '@angular/core/testing';

import { PublisherPermissionService } from './publisher-permission.service';

describe('PublisherPermissionService', () => {
  let service: PublisherPermissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublisherPermissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
