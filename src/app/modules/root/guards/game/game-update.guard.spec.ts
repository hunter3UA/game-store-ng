import { TestBed } from '@angular/core/testing';

import { GameUpdateGuard } from './game-update.guard';

describe('GameUpdateGuard', () => {
  let guard: GameUpdateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GameUpdateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
