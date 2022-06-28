import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ServicioAgregarAlCarritoService } from './servicio-agregar-al-carrito.service';
import { Observable, share, Subject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tallerWeb2-Only';
  cantidadDePorductos;
  
  constructor( protected router:Router, protected httpClient: HttpClient, private servicioCarrito : ServicioAgregarAlCarritoService){}
  public products:Array<any> = []
  apiStatus: Boolean;
  
  ngOnInit(): void {
      this.servicioCarrito.disparadorDeCarrito.subscribe(products => {
        this.products.push(products);
        this.cantidadDePorductos = this.products.length;
      })
  }
}
