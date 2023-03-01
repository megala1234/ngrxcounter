import { createAction, props } from '@ngrx/store';

export const SHARED_LOADING_ACTION = '[Loading] set loading';
export const SHARED_ERROR_MSG = '[Error Msg] set Error Message';


export const setloading = createAction(SHARED_LOADING_ACTION, props<{status:Boolean}>());
export const setErrorMsg = createAction(SHARED_ERROR_MSG, props<{errorMsg:string}>());
