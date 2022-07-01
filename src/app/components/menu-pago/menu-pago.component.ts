import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-menu-pago',
  templateUrl: './menu-pago.component.html',
  styleUrls: ['./menu-pago.component.css']
})
export class PagoComponent implements OnInit {

  formPurchase: FormGroup;
  email: String;

  constructor( protected router:Router, private formBuilder: FormBuilder, protected httpClient: HttpClient){}

  ngOnInit(): void {
    this.formPurchase = this.formBuilder.group({
      numero: new FormControl('',  Validators.required),
      cvv: new FormControl('',  Validators.required),
      mes: new FormControl('',  Validators.required),
      año: new FormControl('',  Validators.required),
      titular: new FormControl('',  Validators.required),
    });
  }

  confirmPurchase(){
      this.httpClient.post('http://localhost:3000/api/v1/products/purchase', {
        'numero': this.formPurchase.get('numero').value,
        'cvv': this.formPurchase.get('cvv').value,
        'mes': this.formPurchase.get('mes').value,
        'año': this.formPurchase.get('año').value,
        'titular': this.formPurchase.get('titular').value,
        'email': this.email,
      }).subscribe(value => {
        var response = value;
        if(response === "ok") this.router.navigate([""])
      }, (error: HttpErrorResponse) => {
        console.log(error)
      });;
    }
}

