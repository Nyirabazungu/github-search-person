import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from '../user';
import{environment} from '../../environments/environment'
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
@Injectable()
export class UsersComponent implements OnInit {
  user:User

  constructor(
    private http:HttpClient) {
    
     }

  ngOnInit() {
    interface ApiResponse{

    avatar_url:string;
    gravatar_id:string;
    name:string;
    public_repos:number;
    followers:number;
    following:number;
    html_url:string;
  }
//   let promise =new Promise((resolve,reject)=>{
//  this.http.get<ApiResponse>('https://api.github.com/users/daneden?access_token=' + environment.apiKey).subscribe(data=>{
//   toPromise().then(response=>{
//       this.user = new User(data.avatar_url,data. gravatar_id,data. name,data.public_repos,data.followers,data.following,data.html_url);
//       resolve()
//   },
//     // err=>{
//   )
//   })

//   return promise
//  }
//   }}
// let promise =new Promise((resolve,reject)=>{
//   this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
//     let promise =new Promise((resolve,reject)=>{

  let promise =new Promise((resolve,reject)=>{
       this.http.get<ApiResponse>(environment.apiKey).toPromise().then(response=>{
       this.user = new User(response.avatar_url,response. gravatar_id,response. name,response.public_repos,response.followers,response.following,response.html_url);
            resolve()
        },
       
        )
        })  
         err=>{
        this.user= new User("","","",0,0,0,"");
        
        return promise
       }
      }
        }