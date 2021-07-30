import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPostModel} from "../models/IPostModel";


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url='https://jsonplaceholder.typicode.com/posts'
  constructor(private httpClient:HttpClient) { }

  getAllPosts():Observable<IPostModel[]>{
    return this.httpClient.get<IPostModel[]>(this.url)
  }
  getPostById(id:number):Observable<IPostModel>{
    return this.httpClient.get<IPostModel>(this.url+'/'+id)
  }
}
