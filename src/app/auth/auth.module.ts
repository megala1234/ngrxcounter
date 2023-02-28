import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AUTH_STATE_NAME } from './store/auth.selector';
import { AuthReducer } from './store/auth.reducer';
import { AuthEffects } from './store/auth.effects';


const routes:Routes = [
    {path : '',
     children:[
        {path:'',pathMatch:'full',redirectTo:'login'},
        {path:'login',component:LoginComponent}
    ]}
]

@NgModule({
    declarations:[
       LoginComponent
    ],
    imports:[
        CommonModule,
        RouterModule.forChild(routes),
        EffectsModule.forFeature([AuthEffects]),
        StoreModule.forFeature(AUTH_STATE_NAME,AuthReducer),
       ReactiveFormsModule
        ]
})

export class AuthModule{

}