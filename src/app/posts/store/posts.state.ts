import { Post } from "./../../models/posts.model"

export interface PostsState{
    posts:Post[]
}

export const initialState :PostsState={
    posts:[
        {id:'1', title:'sample1',description:'This is a sample title1'},
        {id:'2', title:'sample2',description:'This is a sample title2'},
        {id:'3', title:'sample3',description:'This is a sample title3'},

    ]
 }