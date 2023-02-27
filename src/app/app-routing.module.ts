
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes ,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';



const routes: Routes=[
  { path: '', component:HomeComponent},
  { path:'counter',
    loadChildren:() => import('./counter.module').then(c=> c.CounterModule)
  },
  { path:'posts',
    loadChildren:()=>import('./posts.module').then(p => p.PostsModule)
  },
  { path:'auth',
    loadChildren:()=>import('./auth/auth.module').then(p => p.AuthModule)
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
