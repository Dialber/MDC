import { TestBed } from '@angular/core/testing';

import { FilmsGuard } from './films.guard';

describe('FilmsGuard', () => {
  let guard: FilmsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FilmsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
