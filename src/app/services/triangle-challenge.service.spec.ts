/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TriangleChallengeService } from './triangle-challenge.service';

describe('Service: TriangleChallengeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TriangleChallengeService]
    });
  });

  it('should ...', inject([TriangleChallengeService], (service: TriangleChallengeService) => {
    expect(service).toBeTruthy();
  }));
});
