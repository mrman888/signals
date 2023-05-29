import { TestBed } from '@angular/core/testing';

import { MyOwnService } from './my-own.service';

describe('MyOwnService', () => {
  let service: MyOwnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyOwnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
