import { TestBed } from '@angular/core/testing';

import { NgxCardInputsService } from './ngx-card-inputs.service';

describe('NgxCardInputsService', () => {
  let service: NgxCardInputsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCardInputsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
