import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";

import {HttpClientModule} from "@angular/common/http";
import { UsersComponent } from './components/users/users.component';
import {routes} from "./routes/basic.routes";
import { PostsComponent } from './components/posts/posts.component';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';




@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    UserComponent,
    PostComponent,
    UserDetailsComponent,
    PostDetailsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
