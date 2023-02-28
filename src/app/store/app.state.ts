import { sharedReducer } from "./shared/shared.reducer"
import { SHARED_STATE_NAME } from "./shared/shared.selector"
import { Shared } from "./shared/shared.state"



export interface AppState{
  [SHARED_STATE_NAME]:Shared
}

export const appReducer = {
  [SHARED_STATE_NAME]:sharedReducer
}