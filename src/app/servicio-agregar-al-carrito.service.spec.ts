import { TestBed } from '@angular/core/testing';

import { ServicioAgregarAlCarritoService } from './servicio-agregar-al-carrito.service';

describe('ServicioAgregarAlCarritoService', () => {
  let service: ServicioAgregarAlCarritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioAgregarAlCarritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
