import { TestBed } from '@angular/core/testing';

import { NgbtoastService } from './ngbtoast.service';

describe('NgbtoastService', () => {
  let service: NgbtoastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgbtoastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
