import { counterReducer } from './../counter/state/counter.reducer';
import { counterState } from "../counter/state/counter.state";
import { PostsState } from "../posts/store/posts.state";
import { postsReducer } from '../posts/store/posts.reducer';


export interface AppState{
    counter:counterState,
    posts:PostsState
}

export const appReducer = {
    counter:counterReducer,
    posts:postsReducer
}