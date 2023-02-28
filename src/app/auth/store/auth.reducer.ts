import { on } from '@ngrx/store';
import { createReducer } from '@ngrx/store';
import { loginSuccess } from './auth.actions';
import { initialState } from './auth.state';

const _authReducer = createReducer(initialState,
    on(loginSuccess,(state,action)=>{
        return{
            ...state,
            user: action.userData
        }
    }))

export function AuthReducer(state:any,action:any){
    return _authReducer(state,action)
}