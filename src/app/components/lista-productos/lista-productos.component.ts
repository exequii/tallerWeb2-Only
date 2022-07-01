import { Component, OnInit ,Input} from '@angular/core';
import { Product } from './product';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { share, catchError } from 'rxjs/operators';
import { AgregarAlCarritoService } from './agregar-al-carrito.service';
import { LogearseService } from '../login/login.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  products: Product[];
  carrito: Product[];
  apiStatus: Boolean;
  loged: String = "";

  constructor(protected router:Router, protected httpClient: HttpClient,
     private servicioCarrito : AgregarAlCarritoService, private servicioLogin : LogearseService) { }

  ngOnInit(): void {
    this.apiStatus=false;
    this.traerProductos()
    this.carrito=[];
  }
  agregarReloj(products : Product){
    this.carrito.push(products);
    this.servicioCarrito.disparadorDeCarrito.emit(this.carrito)
    this.servicioLogin.disparadorDeLogin.subscribe(data => {
      console.log("hola")
    });
  }
  traerProductos(){
    let res: Observable<Product[]> =
    this.httpClient.get<Product[]>('http://localhost:3000/api/v1/products')
    .pipe(share());
    res.subscribe(
      value=> {
          this.apiStatus = true;
          this.products = value
          console.log(this.products)
              },
      error => {
        this.apiStatus = false;
        console.log('Ocurrio un error');
      });
  }
}
