import { EditpostComponent } from './posts/editpost/editpost.component';

import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes ,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter/counter.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { AddPostComponent } from './posts/add-post/add-post.component';

const routes: Routes=[
  { path: '', component:HomeComponent},
  { path:'counter',component:CounterComponent},
  { path:'posts',component:PostsListComponent,
    children:[
      {path:'add',component:AddPostComponent},
      {path:'edit/:id',component:EditpostComponent}
    ]
 }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
