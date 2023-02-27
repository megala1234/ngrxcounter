import { createAction, props } from '@ngrx/store';
export const LOGIN_START = '[auth page] login start';
export const LOGIN_SUCCESS = '[auth page] login success';
export const LOGIN_ERROR = '[auth page] login error';

export const loginStart = createAction(LOGIN_START, props<{email:string,password:string}>());

export const loginSuccess = createAction(LOGIN_SUCCESS);

export const loginError = createAction(LOGIN_ERROR)