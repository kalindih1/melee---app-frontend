import { TestBed } from '@angular/core/testing';

import { apicall } from './apicall.service';

describe('apicall', () => {
  let service: apicall;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(apicall);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
