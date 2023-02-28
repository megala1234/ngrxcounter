import { createAction, props } from '@ngrx/store';

export const SHARED_LOADING_ACTION = '[Loading] set loading';

export const setloading = createAction(SHARED_LOADING_ACTION, props<{status:Boolean}>());