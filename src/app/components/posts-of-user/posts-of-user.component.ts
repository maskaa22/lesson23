import { Component, OnInit } from '@angular/core';
import {IPostModel} from "../../models/IPostModel";
import {ActivatedRoute} from "@angular/router";

import {PostsOfUserService} from "../../servises/posts-of-user.service";

@Component({
  selector: 'app-posts-of-user',
  templateUrl: './posts-of-user.component.html',
  styleUrls: ['./posts-of-user.component.scss']
})
export class PostsOfUserComponent implements OnInit {

  post:IPostModel[]
  constructor(private activatedRoute:ActivatedRoute, private postsOfUserService:PostsOfUserService) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.postsOfUserService.getPostsByUser(id).subscribe(value => {
           this.post=value
        }
      )
    })
  }
  ngOnInit(): void {
  }

}
