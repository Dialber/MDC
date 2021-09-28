import { TestBed } from '@angular/core/testing';

import { StopVoteService } from './stop-vote.service';

describe('StopVoteService', () => {
  let service: StopVoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StopVoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
