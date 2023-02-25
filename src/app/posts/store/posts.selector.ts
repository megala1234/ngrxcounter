
import { createFeatureSelector ,createSelector } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';
import { PostsState } from './posts.state';

 const getPostSelector = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(getPostSelector, state =>{

    return state.posts;
})

export const getPostsById = createSelector(getPostSelector , (state: any,props: any)=>{
    
    return state.posts.find((x: { id: any; }) => x.id === props.id)
})