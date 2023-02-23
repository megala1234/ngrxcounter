import { increment,decrement,reset, addCounter } from './counter.actions';
import { createReducer, on } from "@ngrx/store";
 import { initialState } from "./counter.state";


export const counterReducer = createReducer(initialState,
    on(increment,(state) => {
       return {
        ...state,
        counter: state.counter + 1
       } 
}),
    on(decrement , (state)=>{
    return {
        ...state,
        counter : state.counter - 1
    }
}),
    on(reset , (state)=>{
    return {
        ...state,
        counter: 0
    }
}),
    on(addCounter,(state,action)=>{
        return {
            ...state,
            counter: state.counter + action.value 
        }
    })
)
