import { Component, OnInit } from '@angular/core';
import { User } from '../user';
// import { Injectable } from '@angular/core';
import{UserRequestService} from'../user-http/user-request.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  providers:[UserRequestService],
  styleUrls: ['./users.component.css']
})
// @Injectable()
export class UsersComponent implements OnInit {
  user:User;
  search="";
  submitIniput(){
    this.userService.UserRequest(this.search);
    console.log(this.search);
  }

  constructor(
    private userService:UserRequestService) {
    
}

  ngOnInit() {
    this.userService.UserRequest("Nyirabazungu");
    this.user=this.userService.user
    // interface ApiResponse{

      // avatar_url:string;
      // gravatar_id:string;
      // name:string;
      // public_repos:number;
      // followers:number;
      // following:number;
      // html_url:string;
    
   
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

  // let promise =new Promise((resolve,reject)=>{
  //      this.http.get<ApiResponse>('https://api.github.com/users/Nyirabazungu?access_token=' + environment.apiKey).toPromise().then(response=>{  
  //      this.user = new User(response.avatar_url,response. gravatar_id,response. name,response.public_repos,response.followers,response.following,response.html_url);
  //           resolve()
  //       },
       
  //       )
  //       })  
  //        err=>{
  //       this.user= new User("","","",0,0,0,"",);
  //       console.log("please try again");
  //       return promise
  //      }
                // }}}
}