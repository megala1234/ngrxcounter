import { loginStart, loginSuccess } from './auth.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap ,map} from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { AuthState } from './auth.state';

@Injectable({
    providedIn:'root'
})
export class AuthEffects{
    constructor(private actions$:Actions, private auth:AuthService){}

    login$ = createEffect(()=>{
        return this.actions$.pipe(ofType(loginStart),
        exhaustMap((action)=>{
            return this.auth.login(action.email,action.password)
            .pipe(map((data)=>{
                const userData = this.auth.formatUser(data)
                return loginSuccess({userData})
            }))
        }))
    })
}