import { TestBed } from '@angular/core/testing';

import { MyBaseService } from './my-base.service';

describe('MyBaseService', () => {
  let service: MyBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
