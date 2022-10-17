import { TestBed } from '@angular/core/testing';

import { StructureGuard } from './structure.guard';

describe('StructureGuard', () => {
  let guard: StructureGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StructureGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
