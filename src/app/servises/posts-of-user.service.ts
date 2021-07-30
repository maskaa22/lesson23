import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IPostModel} from "../models/IPostModel";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostsOfUserService {
  private url='https://jsonplaceholder.typicode.com/users'

  constructor(private httpClient:HttpClient) { }
  getPostsByUser(id:number):Observable<IPostModel[]>{
    return this.httpClient.get<IPostModel[]>(this.url+'/'+id+'/posts')
  }
}
