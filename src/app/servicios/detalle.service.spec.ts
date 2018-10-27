import { TestBed, inject } from '@angular/core/testing';

import { DetalleService } from './detalle.service';

describe('DetalleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetalleService]
    });
  });

  it('should be created', inject([DetalleService], (service: DetalleService) => {
    expect(service).toBeTruthy();
  }));
});
