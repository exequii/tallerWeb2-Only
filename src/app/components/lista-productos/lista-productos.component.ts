import { Component, OnInit ,Input} from '@angular/core';
import { Product } from './product';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { share, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  products: Product[];
  carrito: Product[];
  apiStatus: Boolean;

  constructor(protected router:Router, protected httpClient: HttpClient) { }

  ngOnInit(): void {
    this.apiStatus=false;
    this.traerProductos()
    this.carrito=[];
  }
  agregarReloj(products : Product){
    this.carrito.push(products);
  }
  sacarReloj(codigo : String){
    this.carrito.forEach((element,index)=> {
      if(element.codigo === codigo) this.carrito.splice(index,1)
      else return
    })
  }
  traerProductos(){
    let res: Observable<Product[]> =
    this.httpClient.get<Product[]>('http://localhost:3000/products')
    .pipe(share());
    res.subscribe(
      value=> {
          this.apiStatus = true;
          this.products = value
              },
      error => {
        this.apiStatus = false;
        console.log('Ocurrio un error');
      });
  }
}
