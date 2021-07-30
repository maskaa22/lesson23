import {Component, Input, OnInit} from '@angular/core';
import {IPostModel} from "../../models/IPostModel";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {


  @Input()
  post:IPostModel
  constructor() { }

  ngOnInit(): void {
  }

}
