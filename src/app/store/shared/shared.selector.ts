import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Shared } from './shared.state';

export const SHARED_STATE_NAME = 'loading';

const getSharedState = createFeatureSelector<Shared>(SHARED_STATE_NAME);

export const getLoading = createSelector(getSharedState, state=>{
    return state.ShowLoading;
})

export const geterrormsg = createSelector(getSharedState, state=>{
    return state.errorMessage
})