import { TestBed } from '@angular/core/testing';

import { StructureInterceptor } from './structure.interceptor';

describe('StructureInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      StructureInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: StructureInterceptor = TestBed.inject(StructureInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
