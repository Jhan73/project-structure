import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { orderSummaryResolver } from './order-summary.resolver';

describe('orderSummaryResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => orderSummaryResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
