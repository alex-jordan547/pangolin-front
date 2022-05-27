import { TestBed } from '@angular/core/testing';

import { PangolinService } from './pangolin.service';

describe('PangolinService', () => {
  let service: PangolinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PangolinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
