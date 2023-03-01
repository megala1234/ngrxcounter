import { AuthState } from 'src/app/auth/store/auth.state';
import { AuthReducer } from '../auth/store/auth.reducer';
import { AUTH_STATE_NAME } from '../auth/store/auth.selector';
import { sharedReducer } from "./shared/shared.reducer"
import { SHARED_STATE_NAME } from "./shared/shared.selector"
import { Shared } from "./shared/shared.state"



export interface AppState{
  [SHARED_STATE_NAME]:Shared;
  [AUTH_STATE_NAME]:AuthState
}

export const appReducer = {
  [SHARED_STATE_NAME]:sharedReducer,
  [AUTH_STATE_NAME]:AuthReducer
}