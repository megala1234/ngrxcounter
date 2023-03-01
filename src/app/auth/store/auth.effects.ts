import { setloading, setErrorMsg } from './../../store/shared/shared.actions';
import { AppState } from './../../store/app.state';
import { Store } from '@ngrx/store';
import { loginStart, loginSuccess, loginError } from './auth.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap ,map, of} from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { AuthState } from './auth.state';
import { Router } from '@angular/router';

@Injectable({
    providedIn:'root'
})
export class AuthEffects{
    constructor(private actions$:Actions, 
        private auth:AuthService, 
        private store : Store<AppState>,
        private route:Router){}

    login$ = createEffect(()=>{
        return this.actions$.pipe(ofType(loginStart),
        exhaustMap((action)=>{
            return this.auth.login(action.email,action.password)
            .pipe(map((data)=>{
                this.store.dispatch(setloading({status:false}));
                this.store.dispatch(setErrorMsg({errorMsg:''}));

                const userData = this.auth.formatUser(data)
                return loginSuccess({userData})
            }),
            catchError((errResponse)=>{
                this.store.dispatch(setloading({status:false}));
                console.log(errResponse.error.error.message);
                const errordata = this.auth.getErrorMsgFormat(errResponse.error.error.message)
                return of(setErrorMsg({errorMsg:errordata}))
            })
            )
           
        }))
    })

    loginRedirect$ = createEffect(()=>{
        return this.actions$.pipe(ofType(loginSuccess),
        map((action)=>{
            this.route.navigate(['/'])
        }))
    },{dispatch:false})
}