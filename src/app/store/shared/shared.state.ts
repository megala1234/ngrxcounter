export interface Shared{
    ShowLoading:Boolean;
    errorMessage:string;
}

export const initialState:Shared = {
    ShowLoading:false,
    errorMessage:''
}