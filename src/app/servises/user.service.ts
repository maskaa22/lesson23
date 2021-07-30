import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUserModel} from "../models/IUserModel";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url='https://jsonplaceholder.typicode.com/users'

constructor(private httpClient:HttpClient) { }

  getAllUsers():Observable<IUserModel[]>{
    return this.httpClient.get<IUserModel[]>(this.url)
  }
  getUserById(id:number):Observable<IUserModel>{
    return this.httpClient.get<IUserModel>(this.url+'/'+id)
  }
}
