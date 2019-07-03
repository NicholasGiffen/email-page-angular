import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component'; //added this and two below lines
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
//imported above three, then made the routes corrolating to them to activate them

const routes: Routes = [
  {
    path: '', //path loads when app loads. think of it as forward slash
    component: UsersComponent
  },
  {
    path: 'details/:id', //:id is basically a url parameter
    component: DetailsComponent
  },
  {
    path: 'posts', 
    component: PostsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
