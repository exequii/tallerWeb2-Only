import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AgregarAlCarritoService } from './components/lista-productos/agregar-al-carrito.service';
import { LogearseService } from './components/login/login.service';
import { Observable, share, Subject } from 'rxjs';
import { Product } from './components/lista-productos/product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tallerWeb2-Only';
  cantidadDePorductos;
  
  
  constructor( protected router:Router, protected httpClient: HttpClient, private servicioCarrito : AgregarAlCarritoService,
    private servicioLogin : LogearseService){}
    
    public products:Array<any> = [];
    public loged: String = "";
    public isAdmin: Boolean = false;
    public viewModal : Boolean = false;


  ngOnInit(): void {
      this.servicioLogin.disparadorDeLogin.subscribe(data => {
        this.loged = data.email;
        if(data.password === "Admin1234.") this.isAdmin = true;
      });
<<<<<<< HEAD

=======
>>>>>>> e4944c6ab49493fe3cdeb5cc10961802d9f62cac
      this.servicioCarrito.disparadorDeCarrito.subscribe(products => {
        this.products = products
        this.cantidadDePorductos = this.products.length;
      })
  }

  cerrarSesion(){
    this.loged = "";
    localStorage.removeItem('usuario');
    this.router.navigate([""]);
  }

  abrirPopUp(){
    this.viewModal =  true;
  }

  cerrarPopUp(){
    this.viewModal =  false;
  }

  sacarReloj(product : Product){
    var index = this.products.indexOf(product)
    this.products.splice(index,1)
    this.cantidadDePorductos = this.products.length;
  }
}
