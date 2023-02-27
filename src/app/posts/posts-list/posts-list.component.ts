import { Post } from './../../models/posts.model';
import { getPosts } from './../store/posts.selector';
import { Observable } from 'rxjs';
import { AppState } from './../../store/app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { deletePost } from '../store/posts.actions';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  constructor(private store: Store<AppState>) { }
  postsData!:Post[];
 // postsData$!: Observable<Post[]>
  ngOnInit(): void {
   
      this.store.select(getPosts).subscribe(data=>{
     
      this.postsData = data;
    });
    
  }

  deletePost(postid:any){
    console.log(postid)
    if(confirm('Are You sure you want to delete this post?')){
      this.store.dispatch(deletePost({ postid }))
    }
   
  }

}
