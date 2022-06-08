import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  formSignIn: FormGroup;
  email: String;

  constructor( protected router:Router, private formBuilder: FormBuilder, protected httpClient: HttpClient){

  }

  ngOnInit(): void {
    this.formSignIn = this.formBuilder.group({
      email: new FormControl('',  Validators.required),
      password: new FormControl('',  Validators.required),
    });
  }

  signIn(){
    console.log('ejecutando signup');
    this.httpClient.post('http://localhost:3000/signin', {
      'password': this.formSignIn.get('password').value,
      'email': this.formSignIn.get('email').value,
    }).subscribe(value => {
      alert(JSON.stringify(value));
    });
  }

  recoverPass(){
    console.log('ejecutando signup');
    this.httpClient.post('http://localhost:3000/signin', {
      'password': this.formSignIn.get('password').value,
      'email': this.formSignIn.get('email').value,
    }).subscribe(value => {
      alert(JSON.stringify(value));
    });
  }
}
