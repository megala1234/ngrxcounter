import { addPost } from './../store/posts.actions';
import { AppState } from './../../store/app.state';
import { Store } from '@ngrx/store';
import { Post } from './../../models/posts.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor(private store: Store<AppState>) { }
  postform!:FormGroup;
  ngOnInit(): void {
    this.postform = new FormGroup({
      title: new FormControl('',[Validators.required,
        Validators.minLength(3)]),
      description: new FormControl('',[Validators.required,Validators.minLength(6)])
    })
  }

  addPostForm(){
    console.log(this.postform)
    console.log(this.postform.value)
    const post:Post = {
      title: this.postform.value.title,
      description:this.postform.value.description
    }
    this.store.dispatch(addPost({post}))
  }

}
