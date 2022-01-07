import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { PostsDetailComponent } from './posts-detail/posts-detail.component';
import { HometabComponent } from './hometab/hometab.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HometabComponent },
  { path: 'postsdetail/:id', component: PostsDetailComponent },
  { path: 'posts', component: MessagesComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
