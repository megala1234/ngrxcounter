import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { EditpostComponent } from './posts/editpost/editpost.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { postsReducer } from './posts/store/posts.reducer';


const route: Routes =[

    {path:'',component:PostsListComponent,
    children:[
      {path:'add',component:AddPostComponent},
      {path:'edit/:id',component:EditpostComponent}
    ]
    
}

]
   

@NgModule({
    declarations:[
        PostsListComponent,
        AddPostComponent,
        EditpostComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        StoreModule.forFeature('posts',postsReducer),
        RouterModule.forChild(route)
    ]
})

export class PostsModule{

}