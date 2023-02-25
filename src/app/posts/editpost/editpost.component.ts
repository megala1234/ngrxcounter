import { updatePost } from './../store/posts.actions';
import { Store } from '@ngrx/store';
import { AppState } from './../../store/app.state';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Post } from 'src/app/models/posts.model';
import { getPostsById } from '../store/posts.selector';


@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit {
  post!:any;
  constructor( private route:ActivatedRoute, private store:Store<AppState>, private router:Router) { }
  editpost!:FormGroup;

  ngOnInit(): void {

    this.route.paramMap.subscribe(data=>{
      const id = data.get('id')
      this.store.select(getPostsById,{id}).subscribe((data)=>{
        this.post = data;
        this.createForm();
      })
    })

      
  }

  createForm(){
    this.editpost = new FormGroup({
      title: new FormControl(this.post.title,[Validators.required,Validators.minLength(3)]),
      description: new FormControl(this.post.description,[Validators.required,Validators.minLength(6)])
    })

  }
  editPost(){
    console.log(this.editpost)
    const updatepost:Post ={
      id:this.post.id,
      title: this.editpost.value.title,
      description: this.editpost.value.description
    }
    this.store.dispatch(updatePost({updatepost}));
    this.router.navigate(['posts'])
  }

}
