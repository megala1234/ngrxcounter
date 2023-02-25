import { createReducer, on } from "@ngrx/store";
import { addPost, updatePost } from "./posts.actions";
import { initialState} from './posts.state';

const _postsReducer = createReducer(initialState,
  on(addPost,(state,action)=>{
    const post = {...action.post}
    post.id =  (state.posts.length + 1).toString()
    return {
      ...state,
      posts:[
        ...state.posts,
        post
      ]
    }
  }),
  on(updatePost , (state,action)=>{

    const updatepost = state.posts.map(post =>{
      return action.updatepost.id === post.id? action.updatepost: post;
    })

    return {
      ...state,
      posts:updatepost
    }
  })
  )

export function postsReducer(state:any, action:any) {
    return _postsReducer(state, action);
  }


