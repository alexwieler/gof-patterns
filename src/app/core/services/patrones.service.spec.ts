import { TestBed } from '@angular/core/testing';

import { PatronesService } from './patrones.service';

describe('PatronesService', () => {
  let service: PatronesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatronesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
