import { TestBed } from '@angular/core/testing';

import { SwitchlanguageService } from './switchlanguage.service';

describe('SwitchlanguageService', () => {
  let service: SwitchlanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwitchlanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
