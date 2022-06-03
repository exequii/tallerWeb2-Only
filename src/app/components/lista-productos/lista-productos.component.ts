import { Component, OnInit ,Input} from '@angular/core';
import { Product } from './product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  products: Product[];
  carrito: Product[];

  constructor(protected router:Router) { }

  ngOnInit(): void {
    this.carrito=[];
    this.products = [
      {
        name: "Apple Watch",
        price: 40,
        details: "El mejor reloj del mercado. Combina delicadez y tecnologia en tu mano siempre.",
        img: "https://http2.mlstatic.com/D_NQ_NP_617858-MLA48328116515_112021-O.webp",
        ofert: true,
        desc: 10,
      },
      {
        name: "Xiaomi Watch",
        price: 80,
        details: "GPS incorporado. Notificaciones. Mas de 90 modos de deporte!.",
        img: "https://www.pngmart.com/files/13/Smartwatch-Gadget-PNG-Clipart.png",
        ofert: false,
        desc: 20,
      }
    ]
  }
  agregarReloj(products : Product){
    this.carrito.push(products);
    console.log(this.products);
  }
}
