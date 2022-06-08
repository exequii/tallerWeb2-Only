import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formSignup: FormGroup;
  email: String;

  constructor( protected router:Router, private formBuilder: FormBuilder, protected httpClient: HttpClient){
  }

  ngOnInit(): void {
    this.formSignup = this.formBuilder.group({
      email: new FormControl('',  Validators.required),
      password: new FormControl('',  Validators.required),
      password2: new FormControl('',  Validators.required),
      nombre: new FormControl('',  Validators.required),
      apellido: new FormControl('',  Validators.required),
      telefono: new FormControl('',  Validators.required),
    });
  }

  signUp(){
    console.log('ejecutando signup');
    this.httpClient.post('http://localhost:3000/signup', {
      'password': this.formSignup.get('password').value,
      'password2': this.formSignup.get('password2').value,
      'email': this.formSignup.get('email').value,
      'nombre': this.formSignup.get('nombre').value,
      'apellido': this.formSignup.get('apellido').value,
      'telefono': this.formSignup.get('telefono').value,
    }).subscribe(value => {
      alert(JSON.stringify(value));
    });
  }

}
