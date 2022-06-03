import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  products: Product[];

  constructor(protected router:Router) { }

  ngOnInit(): void {

    this.products = [
      {
        name: "Apple Watch",
        price: 40,
        details: "El mejor reloj del mercado. Combina delicadez y tecnologia en tu mano siempre.",
        img: "https://www.pngmart.com/files/13/Smartwatch-Gadget-PNG-Clipart.png",
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

}
