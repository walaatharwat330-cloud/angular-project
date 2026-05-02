import { TestBed } from '@angular/core/testing';

import { ProductsDynamic } from './products-dynamic';

describe('ProductsDynamic', () => {
  let service: ProductsDynamic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsDynamic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
