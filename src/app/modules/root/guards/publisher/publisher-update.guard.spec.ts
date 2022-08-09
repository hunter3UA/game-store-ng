import { TestBed } from '@angular/core/testing';

import { PublisherUpdateGuard } from './publisher-update.guard';

describe('PublisherUpdateGuard', () => {
  let guard: PublisherUpdateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PublisherUpdateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
