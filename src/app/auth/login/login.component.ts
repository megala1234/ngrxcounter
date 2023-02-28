import { setloading } from './../../store/shared/shared.actions';
import { loginStart } from './../store/auth.actions';
import { AppState } from './../../store/app.state';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private store:Store<AppState>) { }
  loginForm!:FormGroup;
  ngOnInit(): void {

    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(3)])
    })

  }

  loginSubmit(){
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.store.dispatch(setloading({status:true}))
    this.store.dispatch(loginStart({email,password}))
  }


}
