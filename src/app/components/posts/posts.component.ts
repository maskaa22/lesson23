import { Component, OnInit } from '@angular/core';
import {IPostModel} from "../../models/IPostModel";
import {PostService} from "../../servises/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts:IPostModel[]

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(value => this.posts=value)
  }

}
