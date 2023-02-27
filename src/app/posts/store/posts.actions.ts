import { props } from '@ngrx/store';
import { createAction } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';

const ADD_POST_ACTION = '[Post Page] Add Post';

const EDIT_POST_ACTION = '[Post Page] Edit Post';

const DELETE_POST_ACTION = '[Post Page] Delete Post';


export const addPost = createAction(ADD_POST_ACTION, props<{post:Post}>());

export const updatePost = createAction(EDIT_POST_ACTION, props<{updatepost:Post}>());

export const deletePost = createAction(DELETE_POST_ACTION, props<{postid:any}>());
