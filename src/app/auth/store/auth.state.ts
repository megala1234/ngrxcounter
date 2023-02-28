import { AuthFormat } from './../../models/authFormat.model';

export  interface AuthState{
    user:AuthFormat | null;
}

export const initialState: AuthState={
  user:null
}