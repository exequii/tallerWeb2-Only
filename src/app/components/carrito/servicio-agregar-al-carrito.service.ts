import {EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ServicioAgregarAlCarritoService {
  @Output() disparadorDeCarrito : EventEmitter<any> = new EventEmitter();
  constructor() { }
}
