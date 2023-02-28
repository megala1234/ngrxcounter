import { setloading } from './shared.actions';
import { on } from '@ngrx/store';
import { createReducer } from '@ngrx/store';
import { initialState } from './shared.state';

const _sharedReducer= createReducer(initialState, on(setloading,(state,action)=>{
    return {
        ...state,
        ShowLoading:action.status
    }
}))

export function sharedReducer(state:any, action:any) {
    return _sharedReducer(state, action);
  }
