import { TestBed } from '@angular/core/testing';

import { AlertandoService } from './alertando.service';

describe('AlertandoService', () => {
  let service: AlertandoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertandoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
