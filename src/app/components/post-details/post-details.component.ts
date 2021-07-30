import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IPostModel} from "../../models/IPostModel";
import {PostService} from "../../servises/post.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  post:IPostModel
  constructor(private activatedRoute:ActivatedRoute, private postService:PostService) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.postService.getPostById(id).subscribe(value => this.post=value)
    })
  }

  ngOnInit(): void {
  }

}
